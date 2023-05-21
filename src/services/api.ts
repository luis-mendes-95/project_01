import axios from 'axios'

const api = axios.create({
    // baseURL: 'https://project01-api-render.onrender.com/api',
    baseURL: 'http://localhost:8000/api',
    timeout: 15000
})

export default api