import axios from "axios";
import {CONSTANTS} from "../utils/constants";


const getOrders = (token, query) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/orders?query=${query}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

const getOrder = (token,orderID) => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/user/orders/${orderID}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}



export const ORDER_API = {getOrders, getOrder};
