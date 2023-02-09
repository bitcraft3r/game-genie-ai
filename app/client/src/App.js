import './App.css';
import { Navbar, Home, Chat, Dream, Craft, Item, Signin, Account, Protected } from './Components';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        {/* In React Router v6, the exact prop is not necessary to use, but it can be useful in some cases. The exact prop is used to specify that a route should only match when the path is exactly the same as the current URL.
        In general, it's a good idea to use the exact prop whenever you have routes that share a common prefix in their paths. This can help avoid unexpected behavior and ensure that your routes are well-defined. */}
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/dream" element={<Dream />}></Route>
        <Route exact path="/craft" element={<Craft />}></Route>
        <Route path="/craft/:id/:id2" element={<Item />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/account" element={<Protected><Account /></Protected>}></Route>
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
