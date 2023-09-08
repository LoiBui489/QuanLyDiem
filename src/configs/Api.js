import axios from "axios";
import cookie from "react-cookies";

const SERVER_CONTEXT = "/SaleAppV1";
const SERVER = "http://localhost:8085";

export const endpoints = {
    subjects: `${SERVER_CONTEXT}/subjects/`
}

export const authApi = () => {
    return axios.create({
        baseURL: SERVER,
        headers: {
            "Authorization":  cookie.load("token")
        }
    })
}


export default axios.create({
    baseURL: SERVER
});