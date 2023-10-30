import axios from "axios";
import { getCookie } from 'cookies-next';
//console.log(getCookie('signin_token'))
let token=getCookie('signin_token');
const axiosInstance=axios.create({
    baseURL:`https://api-leadsv3.azurewebsites.net/Api/`,
    headers:{
        'Content-Type':'application/json',
        'accept':'application/json'
    }
})
export const  axiosInstanceToken=axios.create({
//    withCredentials: true,
    baseURL:`https://api-leadsv3.azurewebsites.net/Api/`,
    headers:{
        token: (token !== undefined || token !== '')
        ? token
        : null,
        token: token,//getCookie('signin_token'),//'sHxoyPoImXU=#Jits#info@infospry.com#A',
        'Content-Type':'application/json',
        'accept':'application/json'
    }
})
export const axiosInstanceAccountToken=axios.create({
    baseURL:`https://accounts-apiv2.infospry.in/v1/`,
    headers:{
        token: token,//getCookie('signin_token'),//'sHxoyPoImXU=#Jits#info@infospry.com#A',
        'Content-Type':'application/json',
        'accept':'application/json'
    }
})
export default axiosInstance ;