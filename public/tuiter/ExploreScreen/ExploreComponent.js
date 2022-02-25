import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="col-sm-10 col-lg-7 col-xl-6">
            <div class="d-flex align-items-center">
                <div class="mb-2 w-100">
                    <i class="fa-solid fa-magnifying-glass position-absolute mt-3 ms-3"></i>
                    <input class="border rounded-pill wd-width-95 pt-1 pb-1 ps-5 mt-2" type="text" placeholder="Search Tuiter">
                </div>
                <a href="explore-settings.html" class="float-end fa-2x"><i class="fa-solid fa-gear"></i></a>
            </div>
    
            <ul class="nav nav-tabs mb-2">
                <li class="nav-item">
                    <a href="for-you.html" class="nav-link active">For you</a>
                </li>
                <li class="nav-item">
                    <a href="trending.html" class="nav-link">Trending</a>
                </li>
                <li class="nav-item">
                    <a href="news.html" class="nav-link">News</a>
                </li>
                <li class="nav-item">
                    <a href="sports.html" class="nav-link">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a href="entertainment.html" class="nav-link">Entertainment</a>
                </li>
            </ul>
    
            <div class="position-relative">
                <img class="w-100" src="../images/starship.jpg">
                <span class="fw-bold text-white fa-2x position-absolute wd-bottom-5px wd-left-10px">SpaceX's Starship</span>
            </div>
            
            ${PostSummaryList()}
        </div>
    `)
}

export default ExploreComponent;
