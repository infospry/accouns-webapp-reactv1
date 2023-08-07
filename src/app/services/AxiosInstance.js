import axios from 'axios';
const axiosInstance=axios.create({
    baseURL:'https://staffport-apis.azurewebsites.net/',//'http://localhost:55220/',//
    headers:{   
       'Content-Type':'application/json',
        'accept':'application/json'
    }
})
export default axiosInstance;