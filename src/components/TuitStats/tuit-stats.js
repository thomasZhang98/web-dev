import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <span onClick={likeTuit} className={"w-25"}>
            {
                tuit.liked &&
                <i className="fas fa-heart me-2" style={{color: 'red'}}></i>
            }
            {
                !tuit.liked &&
                <i className="far fa-heart me-2"></i>
            }
            {tuit.stats && tuit.stats.likes}
        </span>
    );
}

export default TuitStats;