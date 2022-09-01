import axios from "axios";
import {CONSTANTS} from "../utils/constants";

const checkoutAuth = (data, token) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/checkout`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data
    })
}

const checkout = data => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/checkout`,
        data
    })
}

export const CHECKOUT_API = {checkoutAuth, checkout};
