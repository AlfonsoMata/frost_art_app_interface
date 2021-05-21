import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import ImageGrid from "./GridImageComponent";
import { GetPostByTheme } from '../api/PublicacionApi.js';

function ThemePage({ match }) {
    const [Posts, setPosts] = useState([]);
    useEffect(async () => {
        async function fetchData() {
            const infoRest = await GetPostByTheme(match.params.id);
            setPosts(infoRest);
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
        <div>
            <h1>New  </h1>
            <Masonry breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {Posts.map((item, index) => (
                    <div key={index}>{item.nombreUsuario}
                        <h1>{item.nombreUsuario}</h1>
                    </div>

                ))}
            </Masonry>
        </div>
    );
}

export default ThemePage;