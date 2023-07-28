import axios from 'axios';
const axiosInstance=axios.create({
    baseURL:'http://localhost:55220/',//https://staffport-apis.azurewebsites.net/',
    headers:{   
       'Content-Type':'application/json',
        'accept':'application/json'
    }
})
export default axiosInstance ;