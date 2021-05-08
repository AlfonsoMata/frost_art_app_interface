import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavBar2 = (props) => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }


    return (
        <div>
            <div>
            <FontAwesomeIcon icon="bars" />&nbsp;
            <img src={process.env.PUBLIC_URL + '/logo1.png'} alt="logo" />&nbsp;
            <img src={process.env.PUBLIC_URL + '/logo2.png'} alt="logo" />&nbsp;
            <input type="text" placeholder="Search"></input>
            <FontAwesomeIcon icon="ellipsis-h" />&nbsp;
            <FontAwesomeIcon icon="bell" />&nbsp;
            <FontAwesomeIcon icon="user" />&nbsp;
            <label>log in/log out</label>
            </div>
        </div>
    );
}


export default NavBar2;