import React, { useState, useEffect } from 'react';
import './PublishPost.css';
import { GetAll } from '../api/TemasApi';
import { CreatePost, CreateTags } from '../api/PublicacionApi';
import firebase from './FireBase';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import {AddImage} from '../api/ImageAPI';

const PublicPost = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(1),
      width: '500px',
      textAlign: "center",
      background: 'rgb(2,0,36)',
      background: 'linear-gradient(69deg, rgba(2,0,36,1) 0%, rgba(25,69,89,1) 50%, rgba(39,92,121,1) 100%)'
    }
  }));
  const [uploadValue, SetUploadValue] = useState(0);
  const [errorMesage, SetUpErrorMesage] = useState("");
  const [Tags, SetTags] = useState({
    Id: 0,
    Nombre: ""
  })
  const [picture, SetUpPicture] = useState("https://i.stack.imgur.com/vk7gF.png");
  const handleOnChange = (e) => {
    const file = e.target.files[0]
    const storageRef = firebase.storage().ref(`pictures/${file.name}`) // aqui lo que hace es que sube la foto
    const task = storageRef.put(file) // la guarda como en un storage local idk

    task.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      SetUploadValue(percentage)
    }, (error) => {
      SetUpErrorMesage(`Ah ocurrido un error${error.message}`);
      //message: `Ha ocurrido un error: `
    }, async () => {
      SetUpErrorMesage("archivoSubido");
      SetUpPicture(await task.snapshot.ref.getDownloadURL()) // y aqui me lo devuelve aja entonces eso es lo que tengo que guardar en la base de datos 
    })
  }

  const [Post, SetPost] = useState({
    Id: 0,
    IdUsuario: 1,
    Titulo: "",
    Descripcion: "",
    IdTema: 0,
    Fecha: "2019-01-06T17:16:40",
    Activo: true
  });

  const [Temas, setTemas] = useState([]);

  useEffect(async () => {
    async function fetchData() {
      const TemasRes = await GetAll();
      setTemas(TemasRes);
      console.log(Temas);
    }

    fetchData();
  }, []);

  const PostSubmit = async (e) => {
    e.preventDefault();
    console.log(Post);
    await CreatePost(Post);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    SetPost({
      ...Post,
      [name]: value,

    });
  };

  const TagsSubmit = async (e) => {
    e.preventDefault();
    const TagsArray = Tags.Nombre.split(',')
    console.log(Tags);
    for (var i = 0; i < TagsArray.length; i++) {
      const TempJson = {
        Id: 0,
        Nombre: TagsArray[i]
      }
      console.log(TempJson);
      SetTags(TempJson);

      await CreateTags(TempJson);
    }
  };

  const handleTagsChange = (e) => {
    const { name, value } = e.target;
    SetTags({
      ...Tags,
      [name]: value,

    });
  };

 const UploadFotoTemp = async (e) =>{
  e.preventDefault();
  await AddImage(picture,0,2);
 }



  const classes = useStyles();
  return (
    <div className="BodyPublish">
      <form onSubmit={UploadFotoTemp}>
      <h2 className="EditText" >Upload your art</h2>
        <Paper className={classes.paper}>
          <img width='200px' src={picture} />
        </Paper>
        <progress className="PictureProgress" value={uploadValue} max='100'></progress>
        <input type='file' name="PhotoSelector" onChange={handleOnChange.bind(this)} />
        {errorMesage}
        <input type="submit" value="uploadFoto"></input>
      </form>
      <form onSubmit={PostSubmit}>
       
        <h2 className="EditText"> add a title</h2>
        <input className="TextTitleInput" type="Text" name="Titulo" onChange={handleInputChange} value={Post.Titulo}></input>
        <h2 className="EditText" >Add a description</h2>
        <textarea name="Descripcion" className="TextTitleInput" onChange={handleInputChange} value={Post.Descripcion} rows="5" cols="80"></textarea>
        <h2 className="EditText" >Seleccione una Categoria</h2>
        <select name='IdTema' onChange={handleInputChange} value={Post.IdTema}>
          {Temas.map((item, index) => (
            <option key={index} value={item.id} >{item.nombre}</option>
          ))}
        </select> <br></br>
        <input type='Submit'></input>
      </form>
      <form onSubmit={TagsSubmit}>
        <h2>Add less than 20 Tags</h2>
        <textarea rows="5" cols="80" onChange={handleTagsChange} name="Nombre" value={Tags.Nombre}></textarea><br></br>
        <input type="submit"></input>
      </form>

    </div>
  );
}

export default PublicPost;