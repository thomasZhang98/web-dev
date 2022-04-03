import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div className="d-flex mt-3">
            <span className="wd-w-20"><i className="fas fa-comment me-2"></i>{tuit.comments}</span>
            <span className="wd-w-20"><i className="fas fa-retweet me-2"></i>{tuit.retuits}</span>
            <span className="wd-w-20">
                <i onClick={() => updateTuit(dispatch, {...tuit, likes: tuit.likes + 1})} className={"far fa-thumbs-up me-2"}></i>
                {tuit.likes}
            </span>
            <span className="wd-w-20">
                <i onClick={() => updateTuit(dispatch, {...tuit, dislikes: tuit.dislikes + 1})} className={"far fa-thumbs-down me-2"}></i>
                {tuit.dislikes}
            </span>
            <span className="wd-w-20"><i className="fas fa-arrow-up-from-bracket"></i></span>
        </div>
    );
}

export default TuitStats;