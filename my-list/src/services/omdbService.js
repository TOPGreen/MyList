import axios from "axios"


export function getFilm(name = "the_shining") {
    return new Promise((res, rej) => {
        axios.get(`http://www.omdbapi.com/?apikey=e911df16&t=${name}/`)
            .then(res)
            .catch(rej)
    });
}