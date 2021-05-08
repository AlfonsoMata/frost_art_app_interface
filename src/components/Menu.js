import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Menu = (props) => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }


    return (
        <div>
            <div>
                <FontAwesomeIcon size="2x" icon="eye" /><br></br>
                <FontAwesomeIcon size="2x" icon="compass" /><br></br>
                <FontAwesomeIcon size="2x" icon="history" /><br></br>
                <FontAwesomeIcon size="2x" icon="fire" /><br></br>
                <FontAwesomeIcon size="2x" icon="palette" /><br></br>
                <FontAwesomeIcon size="2x" icon="bullhorn" /><br></br>
            </div>
        </div>
    );
}


export default Menu;