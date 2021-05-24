import React, { useState, useEffect } from 'react';
import './PublishPost.css';
import { GetAll } from '../api/TemasApi';
import { CreatePost, CreateTags } from '../api/PublicacionApi';
import firebase from './FireBase';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { AddImage } from '../api/ImageAPI';
import Cookies from 'js-cookie';

const PublicPost = () => {

  const [ProfileUser, SetProfileUser] = useState(JSON.parse(Cookies.get('userInfo')));
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
    const storageRef = firebase.storage().ref(`pictures/${file.name}`)
    const task = storageRef.put(file)

    task.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      SetUploadValue(percentage)
    }, (error) => {
      SetUpErrorMesage(`Ah ocurrido un error${error.message}`);
    }, async () => {
      SetUpErrorMesage("archivoSubido");
      SetUpPicture(await task.snapshot.ref.getDownloadURL())
    })
  }

  const [Post, SetPost] = useState({
    Id: 0,
    IdUsuario: ProfileUser.data[0].id,
    Titulo: "",
    Descripcion: "",
    IdTema: "",
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
    const TagsArray = Tags.Nombre.split(',')
    console.log(Post);
    await CreatePost(Post, picture, TagsArray);
    window.location.href = "/Profile";
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

  };

  const handleTagsChange = (e) => {
    const { name, value } = e.target;
    SetTags({
      ...Tags,
      [name]: value,

    });
  };

  const UploadFotoTemp = async (e) => {
    e.preventDefault();
    await AddImage(picture, 0, 2);
  }




  const classes = useStyles();
  return (
    <div className="BodyPublish">
      <form onSubmit={PostSubmit}>
        <h2 className="EditText" >Upload your art</h2>
        <Paper className={classes.paper}>
          <img width='200px' src={picture} />
        </Paper>
        <progress className="PictureProgress" value={uploadValue} max='100'></progress>
        <input type='file' name="PhotoSelector" onChange={handleOnChange.bind(this)} required />
        {errorMesage}
        <h2 className="EditText"> Add a title</h2>
        <input className="TextTitleInput" type="Text" name="Titulo" onChange={handleInputChange} value={Post.Titulo} required></input>
        <h2 className="EditText" >Add a description</h2>
        <textarea name="Descripcion" className="TextTitleInput" onChange={handleInputChange} value={Post.Descripcion} rows="5" cols="80" required></textarea>
        <h2 className="EditText" >Select a theme</h2>
        <select name='IdTema' onChange={handleInputChange} value={Post.IdTema} required>
          {Temas.map((item, index) => (
            <option key={index} value={item.id} >{item.nombre}</option>
          ))}
        </select> <br></br>
        <h2 className="EditText" >Add less than 20 Tags, separate them by comas</h2>
        <textarea className="TextTitleInput" rows="5" cols="80" onChange={handleTagsChange} name="Nombre" value={Tags.Nombre} required></textarea><br></br>
        <input type='Submit'></input>
      </form>

    </div>
  );
}

export default PublicPost;