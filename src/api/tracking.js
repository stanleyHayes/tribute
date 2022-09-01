import axios from "axios";
import {CONSTANTS} from "../utils/constants";

const trackOrder = (tracking) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/tracking/${tracking}`
    });
}

export const TRACKING_API = {trackOrder};
