import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <>
            <div className="list-group mb-2 mt-2">
                <i className="list-group-item"><i className="fab fa-twitter"></i></i>
                <a href="/tuiter" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'home'?'active':''}`}><i className="fa-solid fa-house"></i> <span className="d-none d-xl-block ms-1"> Home</span></a>
                <a href="/tuiter/explore" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'explore'?'active':''}`}><i className="fa-solid fa-hashtag"></i><span className="d-none d-xl-block ms-1"> Explore</span></a>
                <a href="notifications.html" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'notifications'?'active':''}`}><i className="fa-solid fa-bell"></i><span className="d-none d-xl-block ms-1"> Notifications</span></a>
                <a href="messages.html" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'messages'?'active':''}`}><i className="fa-solid fa-envelope"></i><span className="d-none d-xl-block ms-1"> Messages</span></a>
                <a href="bookmarks.html" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'bookmarks'?'active':''}`}><i className="fa-solid fa-bookmark"></i><span className="d-none d-xl-block ms-1"> Bookmarks</span></a>
                <a href="lists.html" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'lists'?'active':''}`}><i className="fa-solid fa-list"></i><span className="d-none d-xl-block ms-1"> Lists</span></a>
                <a href="profile.html" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'profile'?'active':''}`}><i className="fa-solid fa-user"></i><span className="d-none d-xl-block ms-1"> Profile</span></a>
                <a href="more.html" className={`list-group-item list-group-item-action p-0 d-flex align-items-center ${active === 'more'?'active':''}`}>
                    <span className="fa-stack">
                        <i className="fa-solid fa-circle fa-stack-1x"></i>
                        <i className="fa-solid fa-ellipsis fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="d-none d-xl-block">More</span>
                </a>
            </div>
            <button type="button" className="btn btn-primary w-100 rounded-pill">Tuit</button>
        </>
    );
}

export default NavigationSidebar;
