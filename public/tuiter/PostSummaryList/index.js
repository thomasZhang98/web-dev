import PostSummaryItem from "./PostSummaryItem.js";
import posts from './posts.js';

const PostSummaryList = () => {
    return (`
        <ul class="list-group mt-2">
            ${posts.map(post => PostSummaryItem(post)).join('')}
        </ul>
    `);
};

export default PostSummaryList;
