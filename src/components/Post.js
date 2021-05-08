import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ImageGrid3x3 from './PostRecomendationGrid'
import './Post.css'
import Comment from './CommentComponent';

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
        <div className ="Body">
             <Link to={"/"}>Inicio</Link>
            <div className ="PostGrid">
            <h1>{item.title}</h1>
            <ImageGrid3x3 prop="'https://fakestoreapi.com/products?limit=9'"></ImageGrid3x3>
            <img className="PostImage" src={item.image} ></img>
            <ImageGrid3x3 prop="'https://fakestoreapi.com/products?limit=9'"></ImageGrid3x3>
           
            </div>

            <div className="ProfileBanner">
                <img  src="https://i.pinimg.com/564x/e9/24/83/e9248337a185fad3284b43c20e385b03.jpg"/>
                <h1>Crowley</h1>
                <h2>Arte bien chido apoco no</h2>
                <button>Follow</button>
                <button>Like</button>
                <h3>Tags</h3>
                <Link><label>Textil</label></Link>
            </div>
            <Comment></Comment>

        </div>
    );
}

export default Post;