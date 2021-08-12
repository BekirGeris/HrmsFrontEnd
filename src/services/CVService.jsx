import axios from "axios"

export default class CVService{
    getCVs(){
        return axios.get("http://localhost:9999/api/cv/getAll")
    }

    addCv(data){
        return axios.post("http://localhost:9999/api/cv/add", data)
    }
}