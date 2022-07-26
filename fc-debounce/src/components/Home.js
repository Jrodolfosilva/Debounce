import React,{useState,useEffect} from "react";
import axios from "axios";

const Home =()=>{
    const [dados,setdados] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/Clients")
        .then((resp)=>{
            setdados(resp.data)
        })
    },[])
    

return<>Heloo resp fetching</>

}
export default Home