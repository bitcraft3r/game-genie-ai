import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { itemsArr } from "../constants";


function Wish() {

    const conceptArr = itemsArr.filter((e,i) => {
        return e.section === "concept";
    })
    const storyArr = itemsArr.filter((e, i) => {
        return e.section === "story";
    })
    const artArr = itemsArr.filter((e, i) => {
        return e.section === "art";
    })
    const contentArr = itemsArr.filter((e, i) => {
        return e.section === "content";
    })

    const conceptItems = conceptArr.map((e,i) => {
        return (
            <div key={i}>
                <Link
                    href={`/wish/${e.section}/${e.slug}`}    
                >
                    {e.title}
                </Link>
            </div>
        )
    })
    const storyItems = storyArr.map((e,i) => {
        return (
            <div key={i}>
                <Link
                    href={`/wish/${e.section}/${e.slug}`}    
                >
                    {e.title}
                </Link>
            </div>
        )
    })
    const artItems = artArr.map((e,i) => {
        return (
            <div key={i}>
                <Link
                    href={`/wish/${e.section}/${e.slug}`}    
                >
                    {e.title}
                </Link>
            </div>
        )
    })
    const contentItems = contentArr.map((e,i) => {
        return (
            <div key={i}>
                <Link
                    href={`/wish/${e.section}/${e.slug}`}    
                >
                    {e.title}
                </Link>
            </div>
        )
    })

    return (
        <>
        <Navbar />
        <div className="container">
            <div className="header">
                <div className="header-title">
                    <h1>Wish 🧞‍♂️</h1>
                </div>
                <div className="header-subtitle">
                    <h2>Create imaginative worlds, immersive stories, and viral content</h2>
                </div>
            </div>
            <div className="container">
                <h3>Coming Soon...</h3>
            </div>
            {/* <div className="create-container">
                <h3>Concept</h3>
                {conceptItems}
                <h3>Story</h3>
                {storyItems}
                <h3>Art</h3>
                {artItems}
                <h3>Content</h3>
                {contentItems}
            </div> */}
        </div>
        <Footer />
        </>
    );
}

export default Wish;