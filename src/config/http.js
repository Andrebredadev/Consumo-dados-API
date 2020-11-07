import axios from 'axios'

const URL = `https://dadosabertos.camara.leg.br/api/v2`

const http = axios.create({
    baseURL: process.env.REACT_APP_API || URL   
})

http.defaults.headers['Content-type'] = 'application/json'

export default http