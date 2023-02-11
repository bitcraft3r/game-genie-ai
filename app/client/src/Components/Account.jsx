import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import BadgesUser from './BadgesUser';

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

    const [isLoading, setIsLoading] = useState(false);

    /**
     * Bulk of code on this Component is for 
     * Getting the relevant user's actions data from Firestore
     * 
     */

    // constants for (A)
    const [countUserActions, setCountUserActions] = useState(0);

    // constants for (B)
    const [countUserGenerated, setCountUserGenerated] = useState(0);
    const [countUserDownloaded, setCountUserDownloaded] = useState(0);
    const [countUserTweeted, setCountUserTweeted] = useState(0);
    const [countUserImage, setCountUserImage] = useState(0);
    const [countUserText, setCountUserText] = useState(0);

    // constants for (C)
    const [countUserGeneratedImage, setCountUserGeneratedImage] = useState(0);
    const [countUserGeneratedText, setCountUserGeneratedText] = useState(0);
    const [countUserDownloadedImage, setCountUserDownloadedImage] = useState(0);
    const [countUserDownloadedText, setCountUserDownloadedText] = useState(0);

    const actionsRef = collection(db, "actions");

    // (A): total user's actions
    const qUserActions = query(actionsRef, where("email", "==", user.email));

    // (B): total generated, total downloaded, total image actions, total text actions
    const qUserGenerated = query(actionsRef, where("email", "==", user.email), where("action", "==", "generate"));
    const qUserDownloaded = query(actionsRef, where("email", "==", user.email), where("action", "==", "download"));
    const qUserTweeted = query(actionsRef, where("email", "==", user.email), where("type", "==", "tweet"));
    const qUserImage = query(actionsRef, where("email", "==", user.email), where("type", "==", "image"));
    const qUserText = query(actionsRef, where("email", "==", user.email), where("type", "==", "text"));

    // (C): total image generated, total text generated, total image downloaded, total text downloaded
    const qUserGeneratedImage = query(actionsRef, where("email", "==", user.email), where("action", "==", "generate"), where("type", "==", "image"));
    const qUserGeneratedText = query(actionsRef, where("email", "==", user.email), where("action", "==", "generate"), where("type", "==", "text"));
    const qUserDownloadedImage = query(actionsRef, where("email", "==", user.email), where("action", "==", "download"), where("type", "==", "image"));
    const qUserDownloadedText = query(actionsRef, where("email", "==", user.email), where("action", "==", "download"), where("type", "==", "text"));

    useEffect(() => {
        const getStats = async () => {
            setIsLoading(true);

            // Read and increment counters for (A)
            const queryUserActionsSnapshot = await getDocs(qUserActions);
            queryUserActionsSnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                setCountUserActions(countUserActions => countUserActions+1);
            });

            // Read and increment counters for (B)
            const queryUserGeneratedSnapshot = await getDocs(qUserGenerated);
            queryUserGeneratedSnapshot.forEach((doc) => {
                setCountUserGenerated(countUserGenerated => countUserGenerated+1);
            });
            const queryUserDownloadedSnapshot = await getDocs(qUserDownloaded);
            queryUserDownloadedSnapshot.forEach((doc) => {
                setCountUserDownloaded(countUserDownloaded => countUserDownloaded+1);
            });
            const queryUserTweetedSnapshot = await getDocs(qUserTweeted);
            queryUserTweetedSnapshot.forEach((doc) => {
                setCountUserTweeted(countUserTweeted => countUserTweeted+1);
            });
            const queryUserImageSnapshot = await getDocs(qUserImage);
            queryUserImageSnapshot.forEach((doc) => {
                setCountUserImage(countUserImage => countUserImage+1);
            });
            const queryUserTextSnapshot = await getDocs(qUserText);
            queryUserTextSnapshot.forEach((doc) => {
                setCountUserText(countUserText => countUserText+1);
            });

            // Read and increment counters for (C)
            const queryUserGeneratedImageSnapshot = await getDocs(qUserGeneratedImage);
            queryUserGeneratedImageSnapshot.forEach((doc) => {
                setCountUserGeneratedImage(countUserGeneratedImage => countUserGeneratedImage+1);
            });
            const queryUserGeneratedTextSnapshot = await getDocs(qUserGeneratedText);
            queryUserGeneratedTextSnapshot.forEach((doc) => {
                setCountUserGeneratedText(countUserGeneratedText => countUserGeneratedText+1);
            });
            const queryUserDownloadedImageSnapshot = await getDocs(qUserDownloadedImage);
            queryUserDownloadedImageSnapshot.forEach((doc) => {
                setCountUserDownloadedImage(countUserDownloadedImage => countUserDownloadedImage+1);
            });
            const queryUserDownloadedTextSnapshot = await getDocs(qUserDownloadedText);
            queryUserDownloadedTextSnapshot.forEach((doc) => {
                setCountUserDownloadedText(countUserDownloadedText => countUserDownloadedText+1);
            });

            setIsLoading(false);
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
            <h3>Your Badges</h3>
            <BadgesUser 
                userBadge1={Math.ceil(countUserGenerated/2)} 
                userBadge2={Math.ceil(countUserDownloaded/2)}
                userBadge3={Math.ceil(countUserActions/2)}
            />
        </div>
        <div className="container">
            <h3>Your Stats</h3>
            {isLoading ? (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                <div>
                    <h3>Actions Overview</h3>
                    <p>Your Total Actions: {Math.ceil(countUserActions/2)}</p>
                    <p>Your Total Generations: {Math.ceil(countUserGenerated/2)}</p>
                    <p>Your Total Downloads: {Math.ceil(countUserDownloaded/2)}</p>
                    <p>Your Total Tweets: {Math.ceil(countUserTweeted/2)}</p>
                </div>
                <div>
                    <h3>Image Actions</h3>
                    <p>Your Total Image Actions: {Math.ceil(countUserImage/2)}</p>
                    <p>Your Total Image Generations: {Math.ceil(countUserGeneratedImage/2)}</p>
                    <p>Your Total Image Downloads: {Math.ceil(countUserDownloadedImage/2)}</p>
                </div>
                <div>
                    <h3>Text Actions</h3>
                    <p>Your Total Text Actions: {Math.ceil(countUserText/2)}</p>
                    <p>Your Total Text Generations: {Math.ceil(countUserGeneratedText/2)}</p>
                    <p>Your Total Text Downloads: {Math.ceil(countUserDownloadedText/2)}</p>
                </div>
                </>
            )}
        </div>
    </div>
  )
}

export default Account