import React , {useState,useEffect} from 'react';
import './RecomendationGrid.css'
import {Link,Switch} from 'react-router-dom';
import {GetPostThemeLimit,GetSpotligth} from "../api/PublicacionApi";
import ImageShow from "./ImageView";



export const ImageGrid3x3 = (props) => {
    useEffect(()=>{
        fetchItems();
       
    },[]);

    const [items,setItems] = useState([]);

    const fetchItems = async () =>{
        if(props.props==99)
        {
            const data = await GetSpotligth(1);
            setItems(data);
        }
        else
        {
            const data = await GetPostThemeLimit(2);
            setItems(data);
        }
       
       
    };



    return (
        
        <div className="GridContainer" >
            
            {items.map(item=>(
            <Link key={item.id}  to={`/Post/${item.idPublicacion}`}><div  className ="ImageContainer"><ImageShow props={item.idPublicacion}></ImageShow> </div></Link>
            ))}
        </div>
        
    ); 
}


export default ImageGrid3x3;