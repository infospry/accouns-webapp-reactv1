const _baseUrl=process.env.BaseUri;
export const asyncGet = async (url) => {   
    try {
        console.log(_baseUrl);
        const token = '0C817F1F770649F5B1B6BC10CDF76E42';         
        const Checksum ='vpMd6EG07gwJLPB34Jb+wx+kqmjWzMcj';//
        const Source ='ORG';
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
        console.log(data);    
             return data;       
    }
    catch (error) {
        return error
    }
}


export const asyncLogin = async (url,  payload,token) => {
    try {
        const response = await fetch(_baseUrl+ url, {
            method: 'POST',
            headers: {
                'Authorization': token?`Bearer ${token}`:'',
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

export const asyncPost = async (url,  payload,token) => {
    try {
        const response = await fetch(_baseUrl+ url, {
            method: 'POST',
            headers: {
                'Authorization': token?`Bearer ${token}`:'',
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

export const asyncPut = async (url,  payload,token) => {
    try {
        const response = await fetch(_baseUrl + url, {
            method: 'PUT',
            headers: {
                'Authorization': token?`Bearer ${token}`:'',
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

export const asyncDelete = async (url,payload,token) => {
    try {
        const response = await fetch(_baseUrl + url, {
            method: 'DELETE',
            headers: {
                'Authorization': token?`Bearer ${token}`:'',
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