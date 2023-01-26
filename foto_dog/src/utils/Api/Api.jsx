import axios from "axios";

export const Api = axios.create({
    baseURL: `https://dogsapi.origamid.dev/json/`
})