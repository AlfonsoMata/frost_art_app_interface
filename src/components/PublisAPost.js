import React,{useState,useEffect,Fragment} from 'react';
import './PublishPost.css';
import {GetAll} from '../api/TemasApi';
import {CreatePost} from '../api/PublicacionApi';

const PublicPost = ()=>{

    const [Post,SetPost] = useState({
        Id: 0,
        IdUsuario: 1,
        Titulo:"",
        Descripcion:"",
        IdTema: 0,
        Fecha: "2019-01-06T17:16:40",
        Activo: true
      });

    const [Temas,setTemas] = useState([]);

    useEffect(async()=>{
        async function fetchData(){
            const TemasRes = await GetAll();
            setTemas(TemasRes);
            console.log(Temas);
        }

        fetchData();
    },[]);

    const PostSubmit = async (e) => {
        e.preventDefault();
        console.log(Post);
        await CreatePost(Post);
      };

      const handleInputChange=(e)=>{
        const {name,value}= e.target;
        SetPost({
          ...Post,
          [name]:value,

        });
      };


    return(
        <div className="BodyPublish">
            <form onSubmit={PostSubmit}>
                <h2> add a title</h2>
                <input type="Text" name="Titulo" onChange={handleInputChange} value={Post.Titulo}></input>
                <h2>Upload your art</h2>
                <button className="UploadButton">Select Picture</button><br></br>
                <h2>Add a description</h2>
                <textarea name="Descripcion" onChange={handleInputChange} value={Post.Descripcion} rows="5" cols="80"></textarea>
                {/* <h2>Add less than 20 Tags</h2>
                <textarea rows="5" cols="80"></textarea><br></br> */}
                <h2>Seleccione una Categoria</h2>
                <select name='IdTema' onChange={handleInputChange} value={Post.IdTema}>
                {Temas.map((item,index)=>(
                 <option  key={index} value ={item.id} >{item.nombre}</option>
                 ))}
                </select> <br></br>
                <input type ='Submit'></input>
            </form>
            <img src="https://i.pinimg.com/564x/db/c8/fc/dbc8fc8197fdee27993bb3d8c98c1cdf.jpg"></img>
        </div>
    );
}

export default PublicPost;