import React, {useState,useEffect} from 'react';
import './Post.css'

function Comment( ) {
    useEffect(()=>{
    },[]);

    return(
        <div className ="Body">
            <div className="CommentBanner">
                <img  src="https://i.pinimg.com/564x/c8/58/ad/c858ad665a8ceceaafe22d58690fce1e.jpg"/>
                <h1>Sebastian Stan</h1>
                <h2>hola soy un comentario de sebastian stan</h2>
            </div>
        </div>
    );
}

export default Comment;