import { endpoint_login, endpoint_twoFactor } from "./ApiEndPoints";
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

export const twoFactor = async (auth_type , security_code,reqest_token) => {
    console.log(auth_type,security_code,reqest_token)
    reqest_token=reqest_token?reqest_token:'';
    console.log(auth_type,security_code,reqest_token)
    var credentials =`${auth_type.trim()}:${security_code.trim()}:${reqest_token.trim()}`
    // credentials =reqest_token 
    // ?`${auth_type.trim()}:${security_code.trim()}:${reqest_token.trim()}`
    // :`${auth_type.trim()}:${security_code.trim()}`;
    //btoa(auth_type + ':' + security_code+ ':' + reqest_token);
   console.log(credentials)
    
    const encodedToken =Buffer.from(credentials).toString('base64');
    try {        
        const response = await axiosInstance.post(endpoint_twoFactor,{},
            { 
            headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic '+encodedToken,
                     }
            }
        );
        return response;
    }
    catch (error) {
        return error
    }
}