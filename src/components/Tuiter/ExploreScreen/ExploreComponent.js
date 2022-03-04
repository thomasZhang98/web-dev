import React from "react";
import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = () => {
    return (
        <>
            <div className="d-flex align-items-center">
                <div className="mb-2 w-100">
                    <i className="fa-solid fa-magnifying-glass position-absolute mt-3 ms-3"></i>
                    <input className="border rounded-pill wd-width-95 pt-1 pb-1 ps-5 mt-2" type="text" placeholder="Search Tuiter"/>
                </div>
                <a href="explore-settings.html" className="float-end fa-2x"><i className="fa-solid fa-gear"></i></a>
            </div>
    
            <ul className="nav nav-tabs mb-2">
                <li className="nav-item">
                    <a href="for-you.html" className="nav-link active">For you</a>
                </li>
                <li className="nav-item">
                    <a href="trending.html" className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a href="news.html" className="nav-link">News</a>
                </li>
                <li className="nav-item">
                    <a href="sports.html" className="nav-link">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a href="entertainment.html" className="nav-link">Entertainment</a>
                </li>
            </ul>
    
            <div className="position-relative">
                <img className="w-100" src="/tuiter/images/starship.jpg"/>
                <span className="fw-bold text-white fa-2x position-absolute wd-bottom-5px wd-left-10px">SpaceX's Starship</span>
            </div>
            
            {<PostSummaryList/>}
        </>
    )
};

export default ExploreComponent;
