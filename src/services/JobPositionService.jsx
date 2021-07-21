import axios from "axios"

export default class JobPositionService{
    getJobPositions(){
        return axios.get("http://localhost:9999/api/JobPositions/getAll")
    }
}