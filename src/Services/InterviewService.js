import axios from "axios";

let BASE_URL='https://prep4interview.online/api/users';

export const getQuestions=(lang)=>{
    const res=axios.get(BASE_URL+'/getquestion/'+lang)
    console.log("api",res.data);
    return res.data;
}

export const signUp=(user)=>{
    
    return axios.post(BASE_URL+'/save',user)

};