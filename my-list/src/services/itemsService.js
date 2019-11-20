import axios from "axios"
import { serverURL } from './server-url';



export function getItems(type) {
    return new Promise((res, rej) => {
        axios.get(`${serverURL}/${type}`)
            .then(res)
            .catch(rej)
    });
}

export function addItem(type, data) {
    return new Promise((res, rej) => {
        axios.post(`${serverURL}/${type}`, data)
            .then(res)
            .catch(rej);
    });
}