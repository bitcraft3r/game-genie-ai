import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.png';
import ShareTwitterButton from './ShareTwitterButton';
import { auth } from '../firebase/clientApp';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';

const Navbar = () => {

  const [user, setUser] = useAuthState(auth);

  const googleAuth = new GoogleAuthProvider();

  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  }

  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <nav className="nav">
        <div className="nav-logo">
            <Link href="/"><Image src={logo} alt="logo" /></Link>
        </div>
        <ul className="nav-links">
            <li><Link href="/wish">Wish</Link></li>
            <li><Link href="/chat">Chat</Link></li>
            <li><Link href="/dream">Dream</Link></li>
        </ul>
        <div>
          <ShareTwitterButton />
        </div>
        <div>
          {user? (<Link href="/account"><button>ACCOUNT</button></Link>) : (<button onClick={login}>Login</button>)}
        </div>
    </nav>
  )
};

export default Navbar;