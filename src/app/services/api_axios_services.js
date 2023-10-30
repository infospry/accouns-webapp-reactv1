import { axiosInstanceToken, axiosInstanceAccountToken } from "../utils/AxiosInstance"
import { getCookie } from 'cookies-next';
export const get = async (params, end_point) => {
    
    const { data } = await axiosInstanceToken.get(end_point + '?json_data=' + JSON.stringify(params)
        , {
            'mode': 'no-cors' // 'cors' by default
        }
    );
    var serverResponse = '';
    if (data !== "Error converting data type nvarchar to bigint.")
        serverResponse = data;//JSON.parse(data);
    else serverResponse = data;
    return serverResponse;
}

export const getFromContactApi = async (params, end_point) => {
    const { data } = await axiosInstanceAccountToken.post(end_point, JSON.stringify(params)
        // ,{
        //     'mode': 'no-cors' // 'cors' by default
        // }
    );
    var serverResponse =data;// JSON.parse(data);
    return serverResponse;
}

export const post = async (params, end_point) => {
    const { data } = await axiosInstanceToken.post(end_point, JSON.stringify(params));
    var serverResponse =data;// JSON.parse(data);
    return serverResponse;
}