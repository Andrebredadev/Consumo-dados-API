import http from '../config/http'

//GET
const getPoliticalParty = () => http.get('/partidos?itens=100')
const getPolitics = () => http.get('/deputados')
const getMembers = (id) => http.get(`/partidos/${id}/membros?itens=100`)

export {
    getPoliticalParty,
    getPolitics,
    getMembers
}