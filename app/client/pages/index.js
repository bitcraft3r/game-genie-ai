import Image from "next/image";
import logo from "../assets/logo.png";
import { Route, Routes } from 'react-router-dom';

import Link from 'next/link';
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
    return (
        <>
        <Head>
            <title>Game Genie AI</title>
        </Head>
            <Navbar />
        <div className="container">
        <div>
                <div>
                    <h1>Game Genie AI 🧞‍♀️✨</h1>
                </div>
                <div>
                  <h2>Empowering game creators with AI-powered tools for concept, story, art and content generation</h2>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default App;