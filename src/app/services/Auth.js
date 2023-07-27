
import { endpoint_login } from "./ApiEndPoints";
import axiosInstance from "./AxiosInstance";

export const loginUser = async (username, pwd) => {
    try {    
           const response = await axiosInstance.post(endpoint_login, {}, {
            auth: {
                username: username,
                password: pwd
            }
        });
        return response;
    }
    catch (error) {
        return error
    }
}