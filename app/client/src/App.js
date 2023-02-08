import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Chat from './Components/Chat';
import Dream from './Components/Dream';
import Craft from './Components/Craft';
import Item from './Components/Item';
import Signin from './Components/Signin';
import Account from './Components/Account';
import Protected from './Components/Protected';
import { Link, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/dream" element={<Dream />}></Route>
        <Route path="/craft" element={<Craft />}></Route>
        <Route path="/craft/:id/:id2" element={<Item />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/account" element={<Protected><Account /></Protected>}></Route>
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
