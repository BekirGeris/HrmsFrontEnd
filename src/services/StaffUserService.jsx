import axios from "axios"

export default class StaffUserService{
    getStaffUsers(){
        return axios.get("http://localhost:9999/api/SystemStaffs/getAll")
    }
}