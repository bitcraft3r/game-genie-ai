// import { signOut } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import { auth } from '../firebase/clientApp';


const Account = () => {

    // const [user, setUser] = useAuthState(auth);

    // const handleSignOut = async () => {
    //     try {
    //         await signOut();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // } 

  return (
    <>
    <Navbar />
    <div className="container">
        <h1>Dashboard 🧙‍♀️</h1>
        {/* <h2>Welcome, {user?.displayName}!</h2> */}
        {/* nullish coalescing operator; check if `user` is null before accessing `displayName` property */}
        {/* <button onClick={handleSignOut}>Logout</button> */}
        {/* <div className="container">
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
        </div> */}
    </div>
    <Footer />
    </>
  )
}

export default Account