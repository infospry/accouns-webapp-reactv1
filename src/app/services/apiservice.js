
export const getData = async(params,cookie,endPoint)=>{
    
    const requestOptions = {
        headers: {
            token: cookie,// "sHxoyPoImXU=#Jits#info@infospry.com#A",//(getCookie("signin_token") !== undefined ? getCookie("signin_token") : ""),
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }
    };
    const response = await fetch("https://api-leadsv3.azurewebsites.net/Api/" + endPoint + "?json_data=" + JSON.stringify(params), requestOptions).then(function (res) {
        return res.json();
      })
      return response;
      
// const {data }= await axiosInstance.get(ApiEndPoints.login+'?json_data='+JSON.stringify(params));
//     var serverResponse = JSON.parse(data);
//     return serverResponse;
}