const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item d-flex align-items-center">
            <img src= ${who.avatarIcon} class="wd-avatar">
            <span class="e-block d-sm-none d-xl-block me-3"></span>
            <div class="w-100">
                <div class="fw-bold">${who.userName} <i class="fa-solid fa-circle-check"></i></div>
                <div>@${who.handle}</div>
            </div>
            <button type="button" class="btn btn-primary rounded-pill">Follow</button>
        </li>
    `);
}

export default WhoToFollowListItem;
