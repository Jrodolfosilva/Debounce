import React,{useState,useEffect} from "react";
import axios from "axios";

const Home =()=>{
    const [search,setSearch] = useState("")
    const [dados,setdados] = useState([])
    const params =
    
    useEffect(()=>{
      axios.get("http://localhost:5000/Clients",{
        params
      })
        .then((resp)=>{
            setdados(resp.data)
        })
    },[])
return (
    <>
    <input type="search" placeholder="Faça sua buscar" value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <ul>{
            dados.map((client)=>(
                <li key={client.userID}>{client.userName}</li>
            ))
        }
    </ul>
    </>
)
}
export default Home