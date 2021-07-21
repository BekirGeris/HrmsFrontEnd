import axios from "axios"

export default class UserService{
    getUsers(){
        return axios.get("http://localhost:9999/api/Users/getAll")
    }
}