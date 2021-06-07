import axios from 'axios'

const api = axios.create({
    // baseURL: 'https://voyage-nepal.uc.r.appspot.com/api'
    // baseURL: 'http://10.0.2.2:8080/api'
    baseURL: 'http://192.168.1.92:8080/api'
})

export default api;
