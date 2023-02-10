import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

/**
 * BUG: Cannot Refresh on ACCOUNT page
 * 
 * When refresh account page, or go directly to /account url, page wil break
 * This was caused after I added user's stats
 */

/**
 * BUG: Double count of actions (by react?)
 * 
 * Why are my ACTIONS double counting?
 * 
 * Temporary band-aid solution to divide results by 2.
 * 
 */

const Account = () => {
    
    const { logOut, user } = UserAuth();

    const [countUserActions, setCountUserActions] = useState(0);

    const actionsRef = collection(db, "actions");
    const qUserActions = query(actionsRef, where("email", "==", user.email));

    useEffect(() => {
        const getStats = async () => {
            const queryUserActionsSnapshot = await getDocs(qUserActions);
            queryUserActionsSnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                setCountUserActions(countUserActions => countUserActions+1);
            });
        }
        getStats();
    }, [])

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    } 

  return (
    <div className="container">
        <h1>Dashboard 🧙‍♀️</h1>
        <h2>Welcome, {user?.displayName}!</h2>
        {/* nullish coalescing operator; check if `user` is null before accessing `displayName` property */}
        <button onClick={handleSignOut}>Logout</button>
        <div className="container">
            <p>Your Total Actions: {Math.ceil(countUserActions/2)}</p>
        </div>
    </div>
  )
}

export default Account