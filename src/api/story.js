import axios from "axios";
import {CONSTANTS} from "../utils/constants";


const getStories = (data) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/stories/`,
        data
    });
}

export const STORY_API = {getStories};
