const _baseUrl=process.env.BaseUri;

export const asyncGet = async (url, token) => {   
    try {
        const response = await fetch('https://dummyjson.com/products', {       
            method: 'GET',
           /* headers: {
                'Authorization': token?`Bearer ${token}`:'',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },*/
        })
        const data = response.json();       
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