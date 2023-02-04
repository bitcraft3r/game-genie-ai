import React from 'react';
import { Link } from 'react-router-dom';

const itemsArr = [
    { category: "brand", slug: "linkedin", title: "LinkedIn Bio" },
    { category: "brand", slug: "twitter", title: "Twitter Bio" },
    { category: "brand", slug: "marketing", title: "Marketing Copy" },
    { category: "brand", slug: "elevator", title: "Elevator Pitch" },
    { category: "copy", slug: "summary", title: "Summarize" },
    { category: "copy", slug: "blog", title: "Blog Post" },
    { category: "copy", slug: "thread", title: "Twitter Thread" },
    { category: "copy", slug: "email", title: "Write Emails" },
    { category: "copy", slug: "freestyle", title: "Freestyle Writer" },
    { category: "hr", slug: "description", title: "Job Description" },
    { category: "hr", slug: "interview", title: "Interview Questions" },
];

const brands = itemsArr.map((e, i) => {
    if (e.category === "brand") 
    return (
        <div key={i+e.slug}>
            <Link to={`/create/${e.category}/${e.slug}`}>{e.title}</Link>
        </div>
    )
});

const copies = itemsArr.map((e, i) => {
    if (e.category === "copy") 
    return (
        <div key={e.category+i+e.slug}>
            <Link to={`/create/${e.category}/${e.slug}`}>{e.title}</Link>
        </div>
    )
});

const hr = itemsArr.map((e, i) => {
    if (e.category === "hr") 
    return (
        <div key={i+e.slug}>
            <Link to={`/create/${e.category}/${e.slug}`}>{e.title}</Link>
        </div>
    )
});

const Create = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="header-title">
                <h1>Create 🪄</h1>
            </div>
            <div className="header-subtitle">
                <h2>Create content effortlessly with AI tools</h2>
            </div>
        </div>
        <div className="create-container">
            <div>
                <h3><Link to="/create/brand">Branding</Link></h3>
                <div>{brands}</div>
            </div>
            <div>
                <h3><Link to="/create/copy">Copywriting</Link></h3>
                <div>{copies}</div>
            </div>
            <div>
                <h3><Link to="/create/hr">HR</Link></h3>
                <div>{hr}</div>
            </div>
        </div>
    </div>
  )
}

export default Create