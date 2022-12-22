 import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/elabdfoods',
    //  headers:{
    //   SECRET_KEY : "wehwfjhvbfviurvicsj54kdcd144alfujbi97853625uesl25kjaopw" 
    // },
    timeout:3000
  });

















//   instance.interceptors.request.use(function(config){

//     store.dispatch(changeLoader(true))
// return config;

//   },function(error){

//     return Promise.reject(error)
//   })

//   instance.interceptors.response.use(function(response){
//     store.dispatch(changeLoader(false))
//     return response
//   },function(error){
//     return Promise.reject(error)
//   })




  export default instance