import axios from 'axios';

const KEY = '';

//https://developers.google.com/youtube/v3/docs/search/list?hl=pt-br

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet', 
        type: 'video', 
        maxResults: 5, 
        key: KEY
    }
})