import React, {useEffect} from 'react';

import ImageGrid from "./GridImageComponent";

function OfTheDay() {
    useEffect(()=>{
    },[]);

    return(
        <div>
        <h1>Of the Day </h1>
        <ImageGrid></ImageGrid>
        </div>
    );
}

export default OfTheDay;