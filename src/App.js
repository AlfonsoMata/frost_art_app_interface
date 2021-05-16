import React,{useState,useEffect,Fragment} from 'react';
import './App.css';
import WebLogo from './FrostWolf.png';
// import ClassComponent from './components/ClassComponent';
// import FunctionalComponent from './components/FunctionalComponent';
// import ImageGrid from './components/GridImageComponent';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
// import Button from './components/ButtonComponent'
import HomePage from './components/Home';
import Post from './components/Post';
import LogIn from './components/LogIn';
import TagView from './components/TagView';
import NewRelease from './components/NewReleaseView';
import OfTheDay from './components/OfTheDay';
import Themes from './components/Themes';
import PublicPost from './components/PublisAPost'
import ArtistYouFollow from './components/ArtistYouFollow';
import Popular from './components/Popular';
import Profile from './components/Profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import TemasIndex from './components/TemasTest'


//Font Awesome
//import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faEllipsisH, faBell, faUser, faEye, faCompass, faHistory, faFire, faPalette, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { InputBase, ListItemText } from '@material-ui/core';
library.add(faBars, faEllipsisH, faBell, faUser, faEye, faCompass, faHistory, faFire, faPalette, faBullhorn )
//

const drawerWidth= 240;


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar:{
    backgroundColor:"#1e4459",
    position: "fixed",
    margin: '0px',
    padding: '0px',
    top: '0',
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    
    paddingLeft: "20px"
    
  },
  Search: {
    flexGrow: 1,
    paddingLeft: "20px",
  },
  drawer:{
    width: drawerWidth,
    flexShrink:0,
    backgroundColor: "#1e4459"
  },
  drawerPaper: {
   
    backgroundColor: "#1e4459"
  },
  drawerContainer:{
    overflow: 'auto',
    backgroundColor: "#1e4459"
  },
}));

const menuItems =[
  {
    text: 'ArtistYouFollow',
    icon: 'eye',
    path: '/ArtistYouFollow'
  },
  {
    text: 'Explore',
    icon: 'compass' ,
    path: '/Home'
  },
  {
    text: 'MostLikeToday',
    icon: 'history',
    path: '/MostLikeToday'
  },
  {
    text: 'Popular',
    icon: 'fire' ,
    path: '/Popular'
  },
  {
    text: 'Themes',
    icon: 'palette',
    path: '/Themes'
  },
  {
    text: 'News',
    icon: 'bullhorn',
    path: '/News'
  }
]

function App() {
  const classes = useStyles();
  return (
    <div className="PrincipalBody">
    <Router>
     
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
        <img id="NavBarLogo"  src ={WebLogo}/>
        <div  id="PageName" className={classes.title} >FrostArt</div>
        <div  className={classes.Search} ><InputBase   placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}>aaaaaaaa</InputBase></div>
        <Link to ="/Profile">
          Profile
        </Link>
        <Link to ="/Login">
        <Button  color="inherit">Login</Button>
      </Link>
        </Toolbar>
      </AppBar>

      <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}>
        <br/>
        <br/>
        <br/>
        <div className={classes.drawerContainer}>
      <List>
        <ListItem >
            <Link to= '/CreatePost'>
            <label>add Post</label>
            </Link>
          </ListItem>
        {menuItems.map(item=>(
          <ListItem key={item.text}>
            <Link to= {item.path}>
            <FontAwesomeIcon size="2x" icon={item.icon} /> 
            </Link>
          </ListItem>
        ))}
      </List>
      </div>
      </Drawer>
   
      <div>
        {/* {items.map(item=>(
          <h1 key ={item.itemid}>{item.name}</h1>
        ))} */}
      </div>
    
     
      <Switch>
        <Route path = "/Home" exact component = {HomePage}/>
        <Route path = "/Post/:id"  component={Post}/>
        <Route path = "/Login" component={LogIn}/>
        <Route path = "/Tags" component={TagView}/>
        <Route path = "/News" component={NewRelease}/>
        <Route path = "/MostLikeToday" component={OfTheDay}/>
        <Route path = "/Themes" component={Themes}/>
        <Route path = "/ArtistYouFollow" component={ArtistYouFollow}/>
        <Route path = "/Popular" component={Popular}/>
        <Route path ='/CreatePost' component={PublicPost}/>
        <Route path = '/Profile' component ={Profile}/>
        <Route path = '/TemasTest' component={TemasIndex}/>
      </Switch>
    
   
    </Router>
    </div>
  
  );
}

function myfunction(){
  
  console.log("CLICKED");
  
}


const WolfPicture = () =>(
  <div>
    <h1>WolfPicturePost</h1>
  </div>
)

export default App;
