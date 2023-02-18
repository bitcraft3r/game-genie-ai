import React from 'react'
import { db } from '../firebase/clientApp';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
// import { useLocation } from 'react-router';
// import { UserAuth } from '../context/AuthContext';

/**
 * 
 * Action component is for adding data to Firestore
 * when user clicks on a button
 */

const Action = ({ type, action, prompt, handleParentSubmit, buttonName }) => {

    // const location = useLocation();
    // const locationPathname = location.pathname;
    // const { user } = UserAuth();

    // let userName = user?.displayName || "anonymous";
    // let userEmail = user?.email || "-"

    const addAction = async () => {
        // console.log(`creating action on firestore`);
        const docRef = await addDoc(collection(db, "actions"), {
            // name: userName,
            // email: userEmail,
            name: "test user name",
            email: "test user email",
            action: action, // generate or download
            type: type, // text or image
            prompt: prompt,
            // path: locationPathname,
            path: "testingpathname",
            timestamp: Timestamp.now()
        });
        // console.log("Document written with ID: ", docRef.id);
    } 

    const handleSubmit = async () => {
        await addAction();
        handleParentSubmit();
    }

    return (
        <button onClick={handleSubmit}>
            {buttonName}
        </button>
    )
}

export default Action