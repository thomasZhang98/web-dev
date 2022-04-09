import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../actions/tuits-actions";

const WhatsHappening = () => {
    const [newTuit, setNewTuit] = useState({
        tuit: 'New tuit',
        postedBy: {username: 'Thomas'},
        handle: "thomas",
        comments: 0,
        retuits: 0,
        likes: 0,
        dislikes: 0,
        "avatar-image": '/tuiter/images/profile.jpg'
    });
    const dispatch = useDispatch();
    return (
        <div className="d-flex mt-3 ms-3">
            <img src={"/tuiter/images/profile.jpg"} className="wd-avatar me-3"/>
            <div className="float-start w-100">
                <textarea value={newTuit.tuit}
                          onChange={(e) => setNewTuit({...newTuit, tuit: e.target.value})}
                          placeholder={"What's happening?"}
                          className="form-control wd-textarea-background-color-black">
                </textarea>
                <hr/>
                <i className="fa-regular fa-image text-primary me-3"></i>
                <i className="fa-solid fa-chart-line text-primary me-3"></i>
                <i className="fa-regular fa-face-smile text-primary me-3"></i>
                <i className="fa-regular fa-calendar text-primary"></i>
                <button onClick={() =>
                    createTuit(dispatch, newTuit)} className="btn btn-primary rounded-pill float-end">
                    Tuit
                </button>
            </div>
        </div>
    );
}
export default WhatsHappening;