import { combineReducers} from 'redux';
import user from './user_reducers';
import stories from "../components/Home/redux/reducers";

const rootReducer = combineReducers({
    user,
    stories
});
export default rootReducer;

