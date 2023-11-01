
export const getData = async (params, cookie, endPoint) => {
    
    const requestOptions = {
        headers: {
            token: cookie,
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }
    };
    const response = await fetch("https://api-leadsv3.azurewebsites.net/Api/" + endPoint + "?json_data=" + JSON.stringify(params), requestOptions).then(function (res) {
        return res.json();
      })
      return response;    

}

// export const getData = async (params, cookie, endPoint) => {    
//     const requestOptions = {
//         headers: {
//             token: cookie,
//             'Content-Type': 'application/json',
//             'accept': 'application/json'
//         }
//     };
//     const response = await fetch("http://localhost:58673/api/" + endPoint + "?json_data=" + JSON.stringify(params), requestOptions).then(function (res) {
//         return res.json();
//       })
//       return response;
// }