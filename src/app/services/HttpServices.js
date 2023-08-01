import { getCookie } from "cookies-next";

const _baseUrl=process.env.BaseUri;
const token = getCookie('token');      
const Checksum =getCookie('checksum');
const Source ='ORG';

export const asyncGet = async (url) => {   
    try {          
        const response = await fetch(_baseUrl+url, {       
            method: 'GET',
            headers: {
                'UA-TOKEN': token?`${token}`:'',
                'RequestChecksum': Checksum?`${Checksum}`:'',
                'Source': token?`${Source}`:'',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        const data = response.json();          
        return data;       
    }
    catch (error) {
        return error
    }
}

export const asyncPost = async (url,  payload) => {
    try {       
        alert(url); 
        const response = await fetch(_baseUrl+ url, {
            method: 'POST',
            headers: {
                'UA-TOKEN': token?`${token}`:'',
                'RequestChecksum': Checksum?`${Checksum}`:'',
                'Source': token?`${Source}`:'',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)           
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error
    }
}

export const asyncPut = async (url,  payload) => {
    try {
        const response = await fetch(_baseUrl + url, {
            method: 'PUT',
            headers: {
                'UA-TOKEN': token?`${token}`:'',
                'RequestChecksum': Checksum?`${Checksum}`:'',
                'Source': token?`${Source}`:'',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error
    }
}

export const asyncDelete = async (url,payload) => {
    try {
        const response = await fetch(_baseUrl + url, {
            method: 'DELETE',
            headers: {
                'UA-TOKEN': token?`${token}`:'',
                'RequestChecksum': Checksum?`${Checksum}`:'',
                'Source': token?`${Source}`:'',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error
    }
}