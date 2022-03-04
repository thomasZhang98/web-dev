import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from './posts.json';

const PostSummaryList = () => {
    return (
        <>
            <ul className="list-group mt-2">
                {posts.map(post => <PostSummaryItem post={post}/>)}
            </ul>
        </>
    );
};

export default PostSummaryList;
