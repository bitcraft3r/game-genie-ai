import './App.css';
import Home from './Components/Home';
import Chat from './Components/Chat';
import Dream from './Components/Dream';
import Create from './Components/Create';
// import Category from './Components/Category';
import Item from './Components/Item';
import { Link, Route, Routes } from 'react-router-dom';
import logo from './assets/logo.png';

function App() {
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/chat">Chat</Link></li>
          <li><Link to="/dream">Dream</Link></li>
        </ul>
      </nav>  
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/dream" element={<Dream />}></Route>
        <Route path="/create" element={<Create />}></Route>
        {/* <Route path="/create/:id" element={<Category />}></Route> */}
        <Route path="/create/:id/:id" element={<Item />}></Route>
      </Routes>
    </>
  );
}

export default App;
