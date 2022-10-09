import axios from "axios";
import {CONSTANTS} from "../utils/constants";


const login = (user) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/auth/login`,
        data: user
    });
}

const register = (user) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/auth/register`,
        data: user
    });
}

const getProfile = token => {
    return axios({
        method: 'GET',
        url: `${CONSTANTS.SERVER_BASE_URL}/auth/profile`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

const updateProfile = (token, data) => {
    return axios({
        method: 'PUT',
        url: `${CONSTANTS.SERVER_BASE_URL}/auth/profile`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data
    });
}

const verifyOTP = (otp, token) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/auth/otp/${token}/verify`,
        data: otp
    });
}

const verifyAccount = (otp, token) => {
    return axios({
        method: 'PUT',
        url: `${CONSTANTS.SERVER_BASE_URL}/auth/profile/${token}`,
        data: otp
    });
}

const resendOTP = (user) => {
    return axios({
        method: 'POST',
        url: `${CONSTANTS.SERVER_BASE_URL}/auth/otp/resend`,
        data: user
    });
}

const authAPI = {login, getProfile, verifyOTP, resendOTP, updateProfile, register, verifyAccount};
export default authAPI;
