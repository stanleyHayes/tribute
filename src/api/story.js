import axios from "axios";
import {CONSTANTS} from "../utils/constants";


const getStories = (query) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/stories?query${query}`
    });
}


const getStory = (id) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/stories/${id}`
    });
}

export const STORY_API = {getStories, getStory};
