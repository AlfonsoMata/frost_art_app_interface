import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import ImageGrid from "./GridImageComponent";
import { GetPostByTheme } from '../api/PublicacionApi.js';
import ImageShow from './ImageView';
import './ThemePage.css'
function ThemePage({ match }) {
    const [Posts, setPosts] = useState([]);
    const [nombreTema, setNombreTema] = useState("");
    useEffect(async () => {
        async function fetchData() {
            const infoRest = await GetPostByTheme(match.params.id);
            setPosts(infoRest);
            if(infoRest.length >0)
            {
                setNombreTema(infoRest[0].nombreTema)
            }
          
            console.log("Cosas: "+Posts);
        }
        fetchData();
    }, []);

    const breakpoints = {
        default: 3,
        1000: 2,
        700: 1
    }

    return (
        <div className="BodyTemas">
            <h1>{nombreTema}</h1>
            <Masonry breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {Posts.map((item, index) => (
                    <div key={index}>
                     <Link to={`/Post/${item.idPublicacion}`} >  <ImageShow props={item.idPublicacion}></ImageShow></Link>
                    </div>

                ))}
            </Masonry>
        </div>
    );
}

export default ThemePage;