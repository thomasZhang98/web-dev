import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../../TuitStats/tuit-stats"

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    return (
        <li className="list-group-item d-flex">
            <img src={tuit["avatar-image"]} className="wd-avatar me-3"/>
            <div className="w-100">
                <div className="d-flex">
                    <div className="w-100">
                        <span className="fw-bold">{tuit.postedBy.username}</span>
                        <span className="wd-color-light-grey"> @{tuit.handle}</span>
                        <div>{tuit.tuit}</div>
                    </div>

                    <div>
                        <i onClick={() => deleteTuit(tuit)} className="fas fa-remove"></i>
                    </div>
                </div>

                {"attachments" in tuit && "video" in tuit.attachments &&
                    <div className="videoWrapper wd-rounded-corners-all-around-20 mt-2">
                        <iframe src={`https://www.youtube.com/embed/${tuit.attachments.video}`} allow="fullscreen"></iframe>
                    </div>}

                {"attachments" in tuit && "image" in tuit.attachments &&
                    <img src={tuit.attachments.image} className="w-100 wd-rounded-corners-all-around-20 mt-2"/>}

                <div className="d-flex mt-3">
                    <span className={"w-25"}><i className="fas fa-comment me-2"></i>{tuit.stats.comments}</span>
                    <span className={"w-25"}><i className="fas fa-retweet me-2"></i>{tuit.stats.retuits}</span>
                    <TuitStats tuit={tuit}/>
                    <span className={"w-25"}><i className="fas fa-arrow-up-from-bracket"></i></span>
                </div>
            </div>
            <div className="wd-grid-row"></div>
        </li>
    )
}

export default TuitListItem;