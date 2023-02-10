import React from 'react'
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useLocation } from 'react-router';
import { UserAuth } from '../context/AuthContext';

const Action = ({ type, action, prompt, handleParentSubmit, buttonName }) => {

    const location = useLocation();
    const locationPathname = location.pathname;
    const { user } = UserAuth();

    let userName = user?.displayName || "anonymous";
    let userEmail = user?.email || "-"

    const addAction = async () => {
        console.log(`creating action on firestore`);
        const docRef = await addDoc(collection(db, "actions"), {
            name: userName,
            email: userEmail,
            action: action, // generate or download
            type: type, // text or image
            prompt: prompt,
            path: locationPathname,
            timestamp: Timestamp.now()
        });
        console.log("Document written with ID: ", docRef.id);
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