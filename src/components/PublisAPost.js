import React,{useState,useEffect,Fragment} from 'react';
import './PublishPost.css';

function PublicPost(){


    return(
        <div className="BodyPublish">
            <form>
                <h2>Upload your art</h2>
                <button className="UploadButton">Select Picture</button><br></br>
                <h2>Add a description</h2>
                <textarea rows="5" cols="80"></textarea>
                <h2>Add less than 20 Tags</h2>
                <textarea rows="5" cols="80"></textarea><br></br>
                <h2>Seleccione una Categoria</h2>
                <select name='select'>
                    <option>PixelArt</option>
                </select> <br></br>
                <input type ='Submit'></input>
            </form>
            <img src="https://i.pinimg.com/564x/db/c8/fc/dbc8fc8197fdee27993bb3d8c98c1cdf.jpg"></img>
        </div>
    );
}

export default PublicPost;