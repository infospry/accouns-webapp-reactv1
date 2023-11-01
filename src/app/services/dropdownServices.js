import { get } from "./api_axios_services"; 
import ApiEndPoints from "../utils/ApiEndPoints"; 
export const getUserList=async()=>{
    
    var params = { "action": "users" }

        const resp = await get(params, ApiEndPoints.dropdownApi);
        
        return resp;
}
export const getLeadTypeList=async()=>{
    var params = { "action": "lead-types" }
        const resp = await get(params, ApiEndPoints.dropdownApi);
        return resp;
}
