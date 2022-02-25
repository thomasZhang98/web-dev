import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from './who.js';

const WhoToFollowList = () => {
    return (`
    <ul class="list-group mt-2">
        <li class="list-group-item fw-bold">Who to follow</li>
        ${who.map(w => WhoToFollowListItem(w)).join('')}
    </ul>
    `);
};

export default  WhoToFollowList;
