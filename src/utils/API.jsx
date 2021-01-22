import axios from 'axios';

export function getUsers() {
    return axios.get("https://randomuser.me/api/?results=20&nat=us")
}