import axios from 'axios'

const KEY = 'AIzaSyCqJiinX4CXZEuOWz5flpFAaO7gPX3JDEc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})