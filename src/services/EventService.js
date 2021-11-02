import axios from 'axios'

const apiClient = axios.create({
    baseurl:'https://my-json-server.typicode.com/laxitshahi/json-db',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})


export default {
  getEvents() {
    return apiClient.get('/events')
  } 
}