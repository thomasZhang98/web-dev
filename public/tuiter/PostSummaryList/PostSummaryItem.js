const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item d-flex align-items-start pt-2 pb-2 ps-3 pe-3">
            <div class="w-100 me-3">
                <div class="wd-color-light-grey">${post.topic}</div>
                <div><span class="fw-bold">${post.userName}</span> <i class="fa-solid fa-circle-check"></i><span class="wd-color-light-grey"> - ${post.time}</span></div>
                <span class="fw-bold">${post.title}</span>
            </div>
            <img src=${post.image} class="wd-width-100 rounded-3">
        </li>
    `);
};

export default  PostSummaryItem;
