const _baseUrl=process.env.BaseUri;

export const asyncGet = async (url) => {   
    try {
        console.log(_baseUrl);
        const token = 'CE6D39B0219D4786A3AD5506C3808426';//'4C64DBB582A54DC19514E8EB5F567050';//getCookie("token");
        const Checksum ='jLiRZOB6epjjECU7gemOyCQ4TEYvOpKJ';//'vpMd6EG07gzmOvc0X4b7uy6fx8hRPRJB'; //getCookie("token");
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