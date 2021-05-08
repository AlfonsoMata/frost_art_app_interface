import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const Menu = (props) => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }


    return (
        <div>
            <div>
                <Link to="/Tags">
                    <li>Tags</li>
                </Link>
                <Link to="/News">
                    <FontAwesomeIcon size="2x" icon="bullhorn" /><br></br>
                </Link>
                <Link to="/MostLikeToday">
                    <FontAwesomeIcon size="2x" icon="history" /><br></br>
                </Link>
                <Link to="/Themes">
                    <FontAwesomeIcon size="2x" icon="palette" /><br></br>
                </Link>
                <Link to="/ArtistYouFollow">
                    <FontAwesomeIcon size="2x" icon="eye" /><br></br>
                </Link>

                <Link to="/Home">
                    <FontAwesomeIcon size="2x" icon="compass" /><br></br>
                </Link>
                <Link to="/Popular">
                    <FontAwesomeIcon size="2x" icon="fire" /><br></br>
                </Link>
            </div>
        </div>
    );
}


export default Menu;