import axios from "axios"

export default class CityService{
    getCities(){
        return axios.get("http://localhost:9999/api/cv/getAll")
    }
}