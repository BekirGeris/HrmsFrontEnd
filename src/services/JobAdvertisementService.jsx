import axios from "axios"

export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:9999/api/Advertisement/getAll")
    }

    addJob(data){
        return axios.post("http://localhost:9999/api/Advertisement/add", data)
    }

    changedActivated(jobAdvertisementId){
        return axios.get("http://localhost:9999/api/Advertisement/changedActivated?jobAdvertisementId=" + jobAdvertisementId)
    }

    getActiveJobAdvertisement(){
        return axios.get("http://localhost:9999/api/Advertisement/getAllActive")
    }    

    getAllActiveAndEmployerName(employerName){
        return axios.get("http://localhost:9999/api/Advertisement/getAllActiveAndEmployerName?employerName=" + employerName)
    }

    getAllActiveSorted(values){
        return axios.get("http://localhost:9999/api/Advertisement/getAllActiveSorted?value=" + values)
    }
}