import React,{useEffect,useState} from 'react';
import {GetAll} from '../api/TemasApi.js';
import './TemaTest.css';
const TemasIndex = (props) =>{
    const [Temas,setTemas] = useState([]);

    useEffect(async()=>{
        async function fetchData(){
            const TemasRes = await GetAll();
            setTemas(TemasRes);
            console.log(Temas);
        }

        fetchData();
    },[]);
    return (
        <div className="BodyTemaTest">
         
            {Temas.map((item,index)=>(
                <div key={index}>{item.id}
                 <h1>{item.nombre}</h1>
                 <img src="https://i.pinimg.com/564x/b9/90/07/b990071d0a6e00153a66201e16b0a678.jpg"/>
                </div>
               
            ))}
        </div>
    )
}

export default TemasIndex;