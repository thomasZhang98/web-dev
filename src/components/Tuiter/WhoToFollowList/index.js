import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from './who.json';

const WhoToFollowList = () => {
    return (
        <>
            <ul className="list-group mt-2">
                <li className="list-group-item fw-bold">Who to follow</li>
                {who.map(w => <WhoToFollowListItem who={w}/>)}
            </ul>
        </>
    );
};

export default  WhoToFollowList;
