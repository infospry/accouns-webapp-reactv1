import axiosInstance from "../utils/AxiosInstance"
import ApiEndPoints from "../utils/ApiEndPoints";
export const loginUser=async(params)=>{
const {data }= await axiosInstance.get(ApiEndPoints.login+'?json_data='+JSON.stringify(params));
    var serverResponse = JSON.parse(data);
    return serverResponse;
}