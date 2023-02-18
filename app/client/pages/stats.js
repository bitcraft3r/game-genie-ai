import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { db } from "../firebase/clientApp";
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

function Stats() {
    const [isLoading, setIsLoading] = useState(false);

    const [countCSV, setCountCSV] = useState(0);
    const [countPNG, setCountPNG] = useState(0);
    const [countChat, setCountChat] = useState(0);
    const [countDream, setCountDream] = useState(0);
    const [countDice, setCountDice] = useState(0); 
    const [countTweet, setCountTweet] = useState(0); 

    const [countGenerated, setCountGenerated] = useState(0);
    const [countDownloaded, setCountDownloaded] = useState(0);
    const [countShared, setCountShared] = useState(0);
    const [countTotal, setCountTotal] = useState(0);
    const [countText, setCountText] = useState(0);
    const [countImages, setCountImages] = useState(0);
    const [countPathHome, setCountPathHome] = useState(0);
    const [countPathChat, setCountPathChat] = useState(0);
    const [countPathDream, setCountPathDream] = useState(0);
    const [countPathWish, setCountPathWish] = useState(0);
    const [countPathStats, setCountPathStats] = useState(0);
    const [countPathAccount, setCountPathAccount] = useState(0);
    const [countPathSignin, setCountPathSignin] = useState(0);
    const [countPathOthers, setCountPathOthers] = useState(0);

    const docRef = doc(db, "statistics", "downloads");
    
    const qTotalGenerated = query(collection(db, "actions"), where("action", "==", "generate"));
    const qTotalDownloaded = query(collection(db, "actions"), where("action", "==", "download"));
    const qTotalShared = query(collection(db, "actions"), where("action", "==", "share"));
    const qTotalText = query(collection(db, "actions"), where("type", "==", "text"));
    const qTotalImages = query(collection(db, "actions"), where("type", "==", "image"));
    const qTotalPathHome = query(collection(db, "actions"), where("path", "==", "/"));
    const qTotalPathChat = query(collection(db, "actions"), where("path", "==", "/chat"));
    const qTotalPathDream = query(collection(db, "actions"), where("path", "==", "/dream"));
    const qTotalPathWish = query(collection(db, "actions"), where("path", "==", "/wish"));
    const qTotalPathStats = query(collection(db, "actions"), where("path", "==", "/stats"));
    const qTotalPathAccount = query(collection(db, "actions"), where("path", "==", "/account"));
    const qTotalPathSignin = query(collection(db, "actions"), where("path", "==", "/signin"));
    // const qTotalPathOthers = query(collection(db, "actions"), where("path", "==", "???"));
    
    useEffect(() => {
        
        const getStats = async () => {
          setIsLoading(true);

            /**
             * COUNTER STATS
             */

            const docSnap = await getDoc(docRef);
            
            // if (docSnap.exists()) {
            //     console.log("Document data:", docSnap.data());
            // } else {
            //     // doc.data() will be undefined in this case
            //     console.log("No such document!");
            // }
            
            setCountCSV(docSnap.data().countCSV);
            setCountPNG(docSnap.data().countPNG);
            setCountChat(docSnap.data().countChat);
            setCountDream(docSnap.data().countDream);
            setCountDice(docSnap.data().countDice);
            setCountTweet(docSnap.data().countTweet);

            /**
             * TOTAL ACTIONS & STATS
             */

            const queryTotalSnapshot = await getDocs(collection(db, "actions"));
            queryTotalSnapshot.forEach((doc) => {
                setCountTotal(countTotal => countTotal+1);
                setCountPathOthers(countPathOthers => countPathOthers+1);
            });

            const queryGeneratedSnapshot = await getDocs(qTotalGenerated);
            queryGeneratedSnapshot.forEach((doc) => {
              setCountGenerated(countGenerated => countGenerated+1);
            });

            const queryDownloadedSnapshot = await getDocs(qTotalDownloaded);
            queryDownloadedSnapshot.forEach((doc) => {
              setCountDownloaded(countDownloaded => countDownloaded+1);
            });

            const querySharedSnapshot = await getDocs(qTotalShared);
            querySharedSnapshot.forEach((doc) => {
              setCountShared(countShared => countShared+1);
            });

            const queryTextSnapshot = await getDocs(qTotalText);
            queryTextSnapshot.forEach((doc) => {
              setCountText(countText => countText+1);
            });

            const queryImagesSnapshot = await getDocs(qTotalImages);
            queryImagesSnapshot.forEach((doc) => {
              setCountImages(countImages => countImages+1);
            });

            // /**
            //  * TOTAL ACTIONS BY PATH
            //  */

            // const queryPathHomeSnapshot = await getDocs(qTotalPathHome);
            // queryPathHomeSnapshot.forEach((doc) => {
            //   setCountPathHome(countPathHome => countPathHome+1);
            //   setCountPathOthers(countPathOthers => countPathOthers-1);
            // });

            // const queryPathChatSnapshot = await getDocs(qTotalPathChat);
            // queryPathChatSnapshot.forEach((doc) => {
            //   setCountPathChat(countPathChat => countPathChat+1);
            //   setCountPathOthers(countPathOthers => countPathOthers-1);
            // });

            // const queryPathDreamSnapshot = await getDocs(qTotalPathDream);
            // queryPathDreamSnapshot.forEach((doc) => {
            //   setCountPathDream(countPathDream => countPathDream+1);
            //   setCountPathOthers(countPathOthers => countPathOthers-1);
            // });

            // const queryPathWishSnapshot = await getDocs(qTotalPathWish);
            // queryPathWishSnapshot.forEach((doc) => {
            //   setCountPathWish(countPathWish => countPathWish+1);
            //   setCountPathOthers(countPathOthers => countPathOthers-1);
            // });

            // const queryPathStatsSnapshot = await getDocs(qTotalPathStats);
            // queryPathStatsSnapshot.forEach((doc) => {
            //   setCountPathStats(countPathStats => countPathStats+1);
            //   setCountPathOthers(countPathOthers => countPathOthers-1);
            // });

            // const queryPathAccountSnapshot = await getDocs(qTotalPathAccount);
            // queryPathAccountSnapshot.forEach((doc) => {
            //   setCountPathAccount(countPathAccount => countPathAccount+1);
            //   setCountPathOthers(countPathOthers => countPathOthers-1);
            // });

            // const queryPathSigninSnapshot = await getDocs(qTotalPathSignin);
            // queryPathSigninSnapshot.forEach((doc) => {
            //   setCountPathSignin(countPathSignin => countPathSignin+1);
            //   setCountPathOthers(countPathOthers => countPathOthers-1);
            // });

            setIsLoading(false);

        }
        getStats();
    }, []);

    return (
        <>
        <Head>
            <title>Stats - Game Genie AI</title>
        </Head>
        <Navbar />
        <div className="container">
            <h1>Statistics 📊</h1>
            <h2>Platform Usage Metrics</h2>

            {isLoading ? (
                  <div className="loader-container">
                      <div className="loader"></div>
                  </div>
              ) : (
              <>
              <div className="container">
                <h3>Actions Overview</h3>
                  <p>Total Actions: {Math.ceil(countTotal/2)}</p>
                  <p>Total Generations: {Math.ceil(countGenerated/2)}</p>
                  <p>Total Downloads: {Math.ceil(countDownloaded/2)}</p>
                  <p>Total Shares: {Math.ceil(countShared/2)}</p>
                <h3>Image Actions</h3>
                  <p>Total Image Actions: {Math.ceil(countImages/2)}</p>
                  <p>Randomized PFPs Generated: {countDice}</p>
                  <p>Other Images Generated: {countDream}</p>
                  <p>PNG Downloaded: {countPNG}</p>
                <h3>Text Actions</h3>
                  <p>Total Text Actions: {Math.ceil(countText/2)}</p>
                  <p>Chats Generated: {countChat}</p>
                  <p>CSV Downloaded: {countCSV}</p>
                <h3>Share Actions</h3>
                  <p>Tweets Shared: {countTweet}</p>
              </div>
              {/* <div className="container">
                <h3>Actions by PATH</h3>
                  <p>Total Actions on /home: {Math.ceil(countPathHome/2)}</p>
                  <p>Total Actions on /chat: {Math.ceil(countPathChat/2)}</p>
                  <p>Total Actions on /dream: {Math.ceil(countPathDream/2)}</p>
                  <p>Total Actions on /wish/*: {Math.ceil(countPathOthers/2)}</p>
                  <p>Total Actions on /wish: {Math.ceil(countPathWish/2)}</p>
                  <p>Total Actions on /stats: {Math.ceil(countPathStats/2)}</p>
                  <p>Total Actions on /account: {Math.ceil(countPathAccount/2)}</p>
                  <p>Total Actions on /signin: {Math.ceil(countPathSignin/2)}</p>
              </div> */}
              </>
            )}

        </div>
        <Footer />
        </>
    );
}

export default Stats;