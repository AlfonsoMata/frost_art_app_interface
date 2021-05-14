import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ImageGrid3x3 from './PostRecomendationGrid'
import './Post.css'
import Comment from './CommentComponent';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

function Post({ match }) {
    useEffect(()=>{
        fetchItem();
        console.log(match)
    },[]);

    const [item,setItem] = useState({
        images:{}
    });

    const fetchItem = async ()=>{
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: "center",
          background: 'rgb(2,0,36)',
          background: 'linear-gradient(69deg, rgba(2,0,36,1) 0%, rgba(25,69,89,1) 50%, rgba(39,92,121,1) 100%)'
        },
        paper2: {
            padding: theme.spacing(2),
            textAlign: "center",
            background: '#051B1F',
          },
        ProfileGrid:{
          backgroundColor: '#071e26',
        }
      }));
      const classes = useStyles();
    return(
        <div id="PostBody">


        <Grid container
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing ={6}>
       
        <Grid item xs={12} sm={8}>
        <Paper className={classes.paper}>
        <img className="PostImage" src={item.image} ></img>
          </Paper>
        {/* <img className="PostImage" src={item.image} ></img>
        <img src="https://i.pinimg.com/564x/d2/d8/96/d2d8963344210762f786cf5acbf5f2de.jpg" /> */}
        <Divider variant="middle" />
        <br></br>
      
        <Grid container spacing={3} className={classes.ProfileGrid}>
        
        <Grid  item xs={12} sm={2}>
           <img id="profilePicture"  src="https://i.pinimg.com/564x/e9/24/83/e9248337a185fad3284b43c20e385b03.jpg"/>
        </Grid>
        <Grid  item xs={12} sm={4}>
           <h2 className="TextEdit" >Crowley</h2>
          <h2  className="TextEdit">Arte bien chido apoco no</h2>
         
        </Grid>
        <Grid  item xs={12} sm={6}>
            <button  className="TextEdit"> Follow </button>
            <button  className="TextEdit"> Like </button>

        </Grid>
        <div className="TagSection">
        <h2 className="TextEdit">Tags :</h2>
        <button>Arte</button>
        </div>

       
      </Grid>
                {/* <img  src="https://i.pinimg.com/564x/e9/24/83/e9248337a185fad3284b43c20e385b03.jpg"/>
                <h1 >Crowley</h1>
                <h2>Arte bien chido apoco no</h2>
                <button>Follow</button>
                <button>Like</button>
                <h3>Tags</h3>
                <Link><label>Textil</label></Link> */}
         
        </Grid>
        <Grid item xs={12} sm={3}>
        <Paper className={classes.paper2}>
            <h2 className="TextEdit" >See More of this Artist</h2>
        <ImageGrid3x3 prop="'https://fakestoreapi.com/products?limit=9'"></ImageGrid3x3><br></br>
        <h2 className="TextEdit"> may you like</h2>
        <ImageGrid3x3 prop="'https://fakestoreapi.com/products?limit=9'"></ImageGrid3x3>
        </Paper>
         
        </Grid>
        </Grid>
        <Comment></Comment>
        <div className ="MadeComent">
        <form>
        <input  type="Text"></input>
        <input  type='Submit'></input>
        </form>
        </div>
             {/* <Link to={"/"}>Inicio</Link>
            <div className ="PostGrid">
            <h1>{item.title}</h1>
            <ImageGrid3x3 prop="'https://fakestoreapi.com/products?limit=9'"></ImageGrid3x3>
            <img className="PostImage" src={item.image} ></img>
            <ImageGrid3x3 prop="'https://fakestoreapi.com/products?limit=9'"></ImageGrid3x3>
           
            </div>

            <div className="ProfileBanner">
                <img  src="https://i.pinimg.com/564x/e9/24/83/e9248337a185fad3284b43c20e385b03.jpg"/>
                <h1>Crowley</h1>
                <h2>Arte bien chido apoco no</h2>
                <button>Follow</button>
                <button>Like</button>
                <h3>Tags</h3>
                <Link><label>Textil</label></Link>
            </div>
            */}

        </div>
    );
}

export default Post;