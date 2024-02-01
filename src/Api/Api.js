import axios from 'axios';

export const BACKEND_ENDPOINT ="https://qtify-backend-labs.crio.do";



export const fetchSongs=async ()=>{
    try{
        const response = await axios.get(BACKEND_ENDPOINT+"/songs");
        return response.data;
    }catch(err){
        console.log(err);
    }
}
