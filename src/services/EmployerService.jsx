import axios from "axios"

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:9999/api/Employers/getAll")
    }
}