import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../../actions/tuits-actions";
import TuitStats from "../../TuitStats/tuit-stats"

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
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
                        <i className="fas fa-remove float-end"
                           onClick={() => deleteTuit(dispatch, tuit)}></i>
                    </div>
                </div>

                {"attachments" in tuit && "video" in tuit.attachments &&
                    <div className="videoWrapper wd-rounded-corners-all-around-20 mt-2">
                        <iframe src={`https://www.youtube.com/embed/${tuit.attachments.video}`} allow="fullscreen"></iframe>
                    </div>}

                {"attachments" in tuit && "image" in tuit.attachments &&
                    <img src={tuit.attachments.image} className="w-100 wd-rounded-corners-all-around-20 mt-2"/>}

                <TuitStats tuit={tuit}/>
            </div>
            <div className="wd-grid-row"></div>
        </li>
    )
}

export default TuitListItem;