import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.png';
import ShareTwitterButton from './ShareTwitterButton';

const Navbar = () => {
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
    </nav>
  )
};

export default Navbar;