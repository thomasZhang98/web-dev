import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "/tuiter/images/react-blue.png"
        }
    }
) => {
    return (
        <>
            <li className="list-group-item d-flex align-items-start pt-2pb-2 ps-3 pe-3">
                <div className="w-100 me-3">
                    <div className="wd-color-light-grey">{post.topic}</div>
                    <div><span className="fw-bold">{post.userName}</span> <i className="fa-solid fa-circle-check"></i><span className="wd-color-light-grey"> - {post.time}</span></div>
                    <span className="fw-bold">{post.title}</span>
                </div>
                <img src={post.image} className="wd-width-100 rounded-3"/>
            </li>
        </>
    );
};

export default  PostSummaryItem;
