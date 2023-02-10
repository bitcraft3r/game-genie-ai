import React from 'react'
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const Action = ({ type, action, prompt }) => {
    const addAction = async () => {
        console.log(`creating action on firestore`);
        const docRef = await addDoc(collection(db, "actions"), {
            name: "TEST NAME",
            email: "test@email.com",
            action: action, // generate or download
            type: type, // text or image
            prompt: prompt,
            timestamp: Timestamp.now()
        });
        console.log("Document written with ID: ", docRef.id);
    } 

    return (
        <button onClick={addAction}>Action</button>
    )
}

export default Action