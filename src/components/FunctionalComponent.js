import React , {useState} from 'react';

export const FunctionalComponent = (props) => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }


    return (
        <div>
            <p>Este es un Functional PITO   component</p>
            <input type ="password" name ="password"
            onChange={handleChange}/>
            <p>{text}</p>
            </div>
    ); 
}


export default FunctionalComponent;