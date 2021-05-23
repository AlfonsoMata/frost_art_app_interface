import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ImageGrid from "./GridImageComponent";

import {GetFollowers} from "../api/UsersApi";
import './ArtistFollow.css';
import Masonry from 'react-masonry-css';
import ImageShow from './ImageView'
import {GetSpotligth} from '../api/PublicacionApi'

function FollowerPosts(props) {

    const [FollowerPosts,SetFollowerPost]=useState([])

    useEffect(async () => {
        async function fetchData() {
            const data = await GetSpotligth(props.props)
            console.log(data);
            SetFollowerPost(data)
        }
        fetchData();
    }, []);

    const breakpoints = {
        default: 3,
        1000: 2,
        700: 1
    }

    return(
        <div className="ArtistBody">
      
        <Masonry breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {FollowerPosts.map((item, index) => (
                    <div key={index}>
                    <ImageShow props={FollowerPosts[index].idPublicacion}></ImageShow>
              
                    </div>
                ))}
            </Masonry>
    
        </div>
    );
}

export default FollowerPosts;