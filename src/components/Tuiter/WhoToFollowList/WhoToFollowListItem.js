import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '/tuiter/images/nasa.jpg',
            userName: 'NASA',
            handle: 'NASA',
        }
    }
) => {
    return (
        <li className="list-group-item d-flex align-items-center">
            <img src={who.avatarIcon} className="wd-avatar"/>
            <span className="e-block d-sm-none d-xl-block me-3"></span>
            <div className="w-100">
                <div className="fw-bold">{who.userName} <i className="fa-solid fa-circle-check"></i></div>
                <div>@{who.handle}</div>
            </div>
            <button type="button" className="btn btn-primary rounded-pill">Follow</button>
        </li>
    )
};

export default WhoToFollowListItem;
