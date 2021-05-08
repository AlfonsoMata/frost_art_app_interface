import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ImageGrid3x3 from './PostRecomendationGrid'

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
        <div>
            <Link to={"/"}>Inicio</Link>
            <h1>{item.title}</h1>
            <img src={item.image} ></img>
            <ImageGrid3x3></ImageGrid3x3>
        </div>
    );
}

export default Post;