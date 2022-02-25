const NavigationSidebar = () => {
    return (`
            <div class="list-group mb-2 mt-2">
                <i class="list-group-item"><i class="fab fa-twitter"></i></i>
                <a href="home.html" class="list-group-item list-group-item-action d-flex align-items-center"><i class="fa-solid fa-house"></i> <span class="d-none d-xl-block ms-1"> Home</span></a>
                <a href="#" class="list-group-item list-group-item-action active d-flex align-items-center"><i class="fa-solid fa-hashtag"></i><span class="d-none d-xl-block ms-1"> Explore</span></a>
                <a href="notifications.html" class="list-group-item list-group-item-action d-flex align-items-center"><i class="fa-solid fa-bell"></i><span class="d-none d-xl-block ms-1"> Notifications</span></a>
                <a href="messages.html" class="list-group-item list-group-item-action d-flex align-items-center"><i class="fa-solid fa-envelope"></i><span class="d-none d-xl-block ms-1"> Messages</span></a>
                <a href="bookmarks.html" class="list-group-item list-group-item-action d-flex align-items-center"><i class="fa-solid fa-bookmark"></i><span class="d-none d-xl-block ms-1"> Bookmarks</span></a>
                <a href="lists.html" class="list-group-item list-group-item-action d-flex align-items-center"><i class="fa-solid fa-list"></i><span class="d-none d-xl-block ms-1"> Lists</span></a>
                <a href="profile.html" class="list-group-item list-group-item-action d-flex align-items-center"><i class="fa-solid fa-user"></i><span class="d-none d-xl-block ms-1"> Profile</span></a>
                <a href="more.html" class="list-group-item list-group-item-action p-0 d-flex align-items-center">
                    <span class="fa-stack">
                        <i class="fa-solid fa-circle fa-stack-1x"></i>
                        <i class="fa-solid fa-ellipsis fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="d-none d-xl-block">More</span>
                </a>
            </div>
            <button type="button" class="btn btn-primary w-100 rounded-pill">Tuit</button>
    `);
}

export default NavigationSidebar;
