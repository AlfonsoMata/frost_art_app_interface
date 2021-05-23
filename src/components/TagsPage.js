import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { GetPostByTag } from '../api/PublicacionApi.js';
import ImageShow from './ImageView';
import './TagPages.css';

function TagsPage({ match }) {
    const [Posts, setPosts] = useState([]);
    const [NombreTags,setNameTags] = useState("");
    useEffect(async () => {
        async function fetchData() {
            const infoRest = await GetPostByTag(match.params.id);
            setPosts(infoRest);
            try{
                setNameTags(infoRest[0].etiquetas[0].nombre);
            }catch(error)
            {
                console.log(error)
                return error
            }
            console.log("Cosas: "+Posts);
        }
        fetchData();
    }, [match.params.id]);

    const breakpoints = {
        default: 3,
        1000: 2,
        700: 1
    }

    return (
        <div className="BodyTags">
            <h1>{NombreTags}</h1>
            <Masonry breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {Posts.map((item, index) => (
                    <div key={index}>
                    <Link to={`/Post/${item.idPublicacion}`} > <ImageShow props={item.idPublicacion}></ImageShow></Link>
                    </div>

                ))}
            </Masonry>
        </div>
    );
}

export default TagsPage;