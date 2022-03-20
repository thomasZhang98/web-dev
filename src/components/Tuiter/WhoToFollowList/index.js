import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
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
