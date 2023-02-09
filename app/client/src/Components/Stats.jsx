import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore'

const Stats = () => {
    const [countCSV, setCountCSV] = useState();
    const [countPNG, setCountPNG] = useState();
    const [countChat, setCountChat] = useState();
    const [countDream, setCountDream] = useState();
    const [countDice, setCountDice] = useState(); 
    const docRef = doc(db, "statistics", "downloads");

    useEffect(() => {

        const getStats = async () => {
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }

            setCountCSV(docSnap.data().countCSV);
            setCountPNG(docSnap.data().countPNG);
            setCountChat(docSnap.data().countChat);
            setCountDream(docSnap.data().countDream);
            setCountDice(docSnap.data().countDice);
        }
        getStats();
    }, []);

    return (
        <div className="container">
            <h1>Statistics</h1>
            <h2>Download stats</h2>
            <div className="container">
                <p>Chats Generated: {countChat}</p>
                <p>Images Generated: {countDream}</p>
                <p>Random PFPs Generated: {countDice}</p>
                <p>CSV Downloaded: {countCSV}</p>
                <p>PNG Downloaded: {countPNG}</p>
            </div>
        </div>
    )
};

export default Stats;