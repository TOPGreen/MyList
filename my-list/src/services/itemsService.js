import axios from "axios"
import { serverURL } from './server-url';



export function getItems(topic) {
    return new Promise((res, rej) => {
        axios.get(`${serverURL}/${topic}`)
            .then(res)
            .catch(rej)
    });
}

export function addItem(topic, form) {
    return new Promise((res, rej) => {
        const bodyFormData = new FormData([form]);
        axios({
            method: 'post',
            url: `${serverURL}/${topic}`,
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(res)
            .catch(rej);
    });
}