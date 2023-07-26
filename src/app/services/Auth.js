
import ApiEndPoints from "./ApiEndPoints";
import axiosInstance from "./AxiosInstance";

export const loginUser = async (username, pwd) => {
    try {
        const _baseUrl=process.env.BaseUri;
        console.log(_baseUrl+'   '+username+' '+pwd);
        const response = await axiosInstance.post(_baseUrl+ApiEndPoints.endpoint_login, {}, {
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