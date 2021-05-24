import React, { useState, useEffect } from 'react';
import './PublishPost.css';
import { GetAll } from '../api/TemasApi';
import { CreatePost, CreateTags } from '../api/PublicacionApi';
import firebase from './FireBase';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import {AddImage} from '../api/ImageAPI';
import Cookies from 'js-cookie';
import { GetPost,UpdatePost,DeletePost} from '../api/PublicacionApi';
import {GetImage} from '../api/ImageAPI'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from "react-router-dom";

const EditPost = ({match}) => {

  const [ProfileUser,SetProfileUser]= useState(JSON.parse(Cookies.get('userInfo')));
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
    IdUsuario: 0,
    Titulo: "",
    Descripcion: "",
    IdTema: "",
    Fecha: "",
    Activo: true
  });

  const [Temas, setTemas] = useState([]);
  const [infoPost, setInfoPost] = useState([]);


  useEffect(async () => {
    async function fetchData() {
      const Postinfo = await GetPost(match.params.id)
      const Urlfoto = await GetImage(match.params.id)
      console.log("Foto info " , Urlfoto)
      SetUpPicture(Urlfoto[0].imagen)
      console.log('Esto',Postinfo)
      const TemasRes = await GetAll();
      const TempPostInfoJson = {
        Id: match.params.id,
        IdUsuario: ProfileUser.data[0].id,
        Titulo: Postinfo[0].titulo,
        Descripcion: Postinfo[0].descripcion,
        IdTema: Postinfo[0].idTema,
        Fecha: "2202-01-06T17:16:40",
        Activo: true
      }

      SetPost(TempPostInfoJson);
      setTemas(TemasRes);
      console.log('ayuda',Post);
      var UnirTags = "";
      for(var i=0;i<Postinfo[0].etiquetas.length;i++)
      {
        if(i==0)
        {
          UnirTags = UnirTags+Postinfo[0].etiquetas[i].nombre;
        }
        else
        {
          UnirTags = UnirTags+','+Postinfo[0].etiquetas[i].nombre;
        }
        console.log('Etiquetas',Postinfo[0].etiquetas[i].nombre);
        
      
      }
      const TempTagJson={
        Id: 0,
        Nombre: UnirTags
      }
      SetTags(TempTagJson);
     
    }

    fetchData();
  }, []);

  const PostSubmit = async (e) => {
    e.preventDefault();
    const TagsArray = Tags.Nombre.split(',')
    await UpdatePost(Post,picture,TagsArray);
    window.location.href = "/Profile";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    SetPost({
        ...Post,
        [name]: value
      });
  };

  const TagsSubmit = async (e) => {
    e.preventDefault();
    
  };
  const Delete = async (e)=>{
    e.preventDefault();
    
    console.log("BorrarPublicacion")
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

 const [open, setOpen] = React.useState(false);

 const handleClickOpen = () => {
   setOpen(true);
   
 };
 const history = useHistory();
 
 const handleCloseYes = async () => {
  setOpen(false);
  await DeletePost(match.params.id);
  history.push("/Profile");
  console.log("ah yes me borraron haha ")

};

 const handleCloseNo =  () => {
   setOpen(false);
   console.log("ah no me borraron haha ")
 };

  const classes = useStyles();
  return (
    <div className="BodyPublish">
       <form onSubmit={PostSubmit}>
      <h2 className="EditText" >Upload your art</h2>
        <Paper className={classes.paper}>
          <img width='200px' src={picture} />
        </Paper>
        <progress className="PictureProgress" value={uploadValue} max='100'></progress>
        <input type='file' name="PhotoSelector" onChange={handleOnChange.bind(this)} />
        {errorMesage}
     
    
       
        <h2 className="EditText"> Add a title</h2>
        <input className="TextTitleInput" type="Text" name="Titulo" onChange={handleInputChange} value={Post.Titulo}  ></input>
        <h2 className="EditText" >Add a description</h2>
        <textarea name="Descripcion" className="TextTitleInput" onChange={handleInputChange} value={Post.Descripcion} rows="5" cols="80"></textarea>
        <h2 className="EditText" >Select a theme</h2>
        <select name='IdTema' onChange={handleInputChange} value={Post.IdTema}>
          {Temas.map((item, index) => (
            <option key={index} value={item.id} >{item.nombre}</option>
          ))}
        </select> <br></br>
        <h2 className="EditText" >Add less than 20 Tags, separate them by comas</h2>
        <textarea className="TextTitleInput" rows="5" cols="80" onChange={handleTagsChange} name="Nombre" value={Tags.Nombre}></textarea><br></br>
        <input type='Submit' value="UpdatePost"></input>
      </form>
            
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Borrar publicacion
      </Button>
      <Dialog
        open={open}
        onClose={handleCloseNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Esta seguro que quiere eliminar la publicacion?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNo} color="primary">
            No
          </Button>
          <Button onClick={handleCloseYes} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      
    

    </div>
  );
}

export default EditPost;