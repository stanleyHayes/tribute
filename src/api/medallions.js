import axios from "axios";
import {CONSTANTS} from "../utils/constants";


const getMedallions = (query) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/medallions?query=${query}`
    });
}

const getMedallion = (id) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/medallions/${id}`
    });
}

export const MEDALLIONS_API = {getMedallions, getMedallion};
