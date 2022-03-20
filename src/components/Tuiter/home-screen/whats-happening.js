import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <div className="d-flex mt-3 ms-3">
            <img src={"/tuiter/images/profile.jpg"} className="wd-avatar me-3"/>
            <div className="float-start w-100">
                <textarea value={whatsHappening}
                            onChange={(event) =>
                            setWhatsHappening(event.target.value)}
                            placeholder={"What's happening?"}
                            className="form-control wd-textarea-background-color-black">
                </textarea>
                <hr/>
                <i className="fa-regular fa-image text-primary me-3"></i>
                <i className="fa-solid fa-chart-line text-primary me-3"></i>
                <i className="fa-regular fa-face-smile text-primary me-3"></i>
                <i className="fa-regular fa-calendar text-primary"></i>
                <button onClick={tuitClickHandler} className="btn btn-primary rounded-pill float-end">
                    Tuit
                </button>
            </div>
        </div>
    );
}
export default WhatsHappening;