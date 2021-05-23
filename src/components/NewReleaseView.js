import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ImageGrid from "./GridImageComponent";
import {GetPublicacionesNuevas} from '../api/PublicacionApi'
import ImageShow from './ImageView';
import Masonry from 'react-masonry-css';
import './NewRelease.css'

function NewRelease() {
    const [NewPosts,setNewPosts]= useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const data = await GetPublicacionesNuevas();
            console.log(data);
            setNewPosts(data);
        };

        fetchData();
     
    },[]);

    const breakpoints = {
        default: 4,
        1000: 2,
        700: 1
    }

    return(
        <div className="NewsBody">
        <h1>News</h1>
      <Masonry breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
               
                 {NewPosts.map((item, index) => (
                           <Link key={NewPosts[index].id} to={`/Post/${NewPosts[index].idPublicacion}`}> <ImageShow props={NewPosts[index].idPublicacion}> </ImageShow></Link>
                    ))}
             
            </Masonry>
        </div>
    );
}

export default NewRelease;