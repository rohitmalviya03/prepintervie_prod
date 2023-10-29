import axios from "axios";

let BASE_URL='http://159.65.154.205:8083/api/users';

export const getQuestions=(lang)=>{
    const res=axios.get(BASE_URL+'/getquestion/'+lang)
    console.log("api",res.data);
    return res.data;
}

export const signUp=(user)=>{
    
    return axios.post(BASE_URL+'/save',user)

};