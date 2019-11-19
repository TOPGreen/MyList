import axios from "axios"
import { serverURL } from './server-url';



export function getItems(topic) {
    return new Promise((res, rej) => {
        axios.get(`${serverURL}/${topic}`)
            .then(res)
            .catch(rej)
    });
}

export function addItem(topic, data) {
    return new Promise((res, rej) => {
        axios.post(`${serverURL}/${topic}`, data)
            .then(res)
            .catch(rej);
    });
}