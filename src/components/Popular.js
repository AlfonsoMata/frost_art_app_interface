import React, {useEffect,useState} from 'react';
import {GetMostLikedPosts} from '../api/PublicacionApi'
import './Popular.css'
import ImageShow from './ImageView'
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';

function Popular() {
    const [PopularPosts,setPopularPosts]=useState([])

    useEffect(async () => {
        async function fetchData() {
        const data = await GetMostLikedPosts()
        console.log(data)
        setPopularPosts(data);
        }
        fetchData();
    }, []);
    const breakpoints = {
        default: 3,
        1000: 2,
        700: 1
    }

    return(
        <div id="popularBody">
        <h1>Hot Topics </h1>
        <Masonry breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
              {PopularPosts.map((item, index) => (
                    <div key={index}>{item.nombreUsuario}
                    <Link to={`/Post/${PopularPosts[index].idPublicacion}`} > <ImageShow props={PopularPosts[index].idPublicacion}></ImageShow></Link>
                    </div>
                ))}
            </Masonry>
       
        </div>
    );
}

export default Popular;