import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ImageGrid3x3 from './PostRecomendationGrid'
import './Post.css'

function Post({ match }) {
    useEffect(()=>{
        fetchItem();
        console.log(match)
    },[]);

    const [item,setItem] = useState({
        images:{}
    });

    const fetchItem = async ()=>{
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
    }
    return(
        <div className ="PostGrid">
             <Link to={"/"}>Inicio</Link>
            <div className ="PostGrid">
           
            <h1>{item.title}</h1>
          
            <img className="PostImage" src={item.image} ></img>
            <ImageGrid3x3 prop="'https://fakestoreapi.com/products?limit=9'"></ImageGrid3x3>
            </div>
           
          
        </div>
    );
}

export default Post;