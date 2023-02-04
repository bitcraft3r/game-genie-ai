import React from 'react';
import Category from './Category';

const brandArr = [
    { slug: "linkedin", title: "LinkedIn Bio" },
    { slug: "twitter", title: "Twitter Bio" },
    { slug: "marketing", title: "Marketing Copy" },
    { slug: "elevator", title: "Elevator Pitch" },
];

const copyArr = [
    { slug: "summary", title: "Summarize" },
    { slug: "blog", title: "Blog Post" },
    { slug: "thread", title: "Twitter Thread" },
    { slug: "email", title: "Write Emails" },
    { slug: "freestyle", title: "Freestyle Writer" },
];

const hrArr = [
    { slug: "description", title: "Job Description" },
    { slug: "interview", title: "Interview Questions" },
]

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
            <div><Category arr={brandArr} heading={"Branding"} slug={"brand"} /></div>
            <div><Category arr={copyArr} heading={"Copywriting"} slug={"copy"} /></div>
            <div><Category arr={hrArr} heading={"HR"} slug={"hr"} /></div>
        </div>
    </div>
  )
}

export default Create