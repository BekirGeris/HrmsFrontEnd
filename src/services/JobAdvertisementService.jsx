import axios from "axios"

export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:9999/api/Advertisement/getAll")
    }

    addJob(data){
        return axios.post("http://localhost:9999/api/Advertisement/add", data)
    }
}