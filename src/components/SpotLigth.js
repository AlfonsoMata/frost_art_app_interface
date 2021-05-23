import React , {useState,useEffect} from 'react';
import './RecomendationGrid.css'
import {Link,Switch} from 'react-router-dom';
import {GetPostThemeLimit,GetSpotligth} from "../api/PublicacionApi";
import ImageShow from "./ImageView";
import Cookies from 'js-cookie';



export const ImageGrid3x3SpotLigth = (props) => {

    useEffect(()=>{
        const fetchItems = async () =>{
            console.log(props.props)
                const data = await GetSpotligth(props.props);
                setItems(data);

        };

        fetchItems();
       
    },[props.props]);

    const [items,setItems] = useState([]);

    return (
        
        <div className="GridContainer" >
            
            {items.map(item=>(
            <Link key={item.id}  to={`/Post/${item.idPublicacion}`}><div  className ="ImageContainer"><ImageShow props={item.idPublicacion}></ImageShow> </div></Link>
            ))}
        </div>
        
    ); 
}


export default ImageGrid3x3SpotLigth;