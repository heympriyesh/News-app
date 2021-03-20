import { combineReducers } from "redux";
import singupReducer from "./singupReducer";
import technologyReducer from "./technologyReducer";
import topBusinessReducer from "./topBusinessReducer";
import topHeadlinesReducer from "./topHeadlinesReducer";
import topSportsReducer from './topSportsReducer';
import topEntertainmentReducer from './topEntertainmentReducer';
import SearchData from "./SerachData";
import customSerachReducer from "./customSerachReducer";
import { deleteReducer } from "./deleteReducer";

const allReducer=combineReducers(
    {
        singup:singupReducer,
        technolgy:technologyReducer,
        top:topHeadlinesReducer,
        business:topBusinessReducer,
        Sports:topSportsReducer,
        enterain: topEntertainmentReducer,
        search:SearchData,
        custom:customSerachReducer,
        delete:deleteReducer
    }
)
export default allReducer;