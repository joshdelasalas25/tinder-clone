import axios from 'axios';

const instance  = axios.create({
    baseURL: "https://tinder-backend25.herokuapp.com/",
});

export default instance;