import http from '../config/http'

//GET
const getPoliticalParty = () => http.get('/blocos')

export {
    getPoliticalParty
}