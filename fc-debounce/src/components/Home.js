import React,{useState,useEffect,useRef} from "react";
import axios from "axios";

const Home =()=>{
    const timeoutRef = useRef()
    const [search,setSearch] = useState("")
    const [dados,setdados] = useState([])

    const Debounce = (func)=>{

        clearTimeout(timeoutRef.current)
     
            timeoutRef.current = setTimeout(()=>{
               return func()
            },1000)

    }
    useEffect(()=>{

        const params={}
        if(search){
            params.userName_like = search
        }

        Debounce(
            function HttpGet (){
                axios.get("http://localhost:5000/Clients",{params})
                .then((resp)=>{
                    setdados(resp.data)
                })
                
            }
          

        )
        
    },[search])
return (
    <>
    <input type="search" placeholder="Faça sua buscar" value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <ul>{
        dados.length?
            dados.map((client)=>(
                <li key={client.userID}>{client.userName}</li>
            )):<p>Carregando...</p>
        }
    </ul>
    </>
)
}
export default Home