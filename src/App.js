import React, { useState, useEffect, Fragment } from 'react';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";
import './App.css';
import WebLogo from './FrostWolf.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/Home';
import Post from './components/Post';
import LogIn from './components/LogIn';
import TagView from './components/TagView';
import NewRelease from './components/NewReleaseView';
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
import TemasIndex from './components/TemasTest';
import ProfileEdit from './components/EditProfile';
import UploadPictureTest from './components/PictureTest';
import ThemePage from './components/ThemePage';
import TagsPage from './components/TagsPage';





import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faEllipsisH, faBell, faUser, faEye, faCompass, faHistory, faFire, faPalette, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { InputBase, ListItemText } from '@material-ui/core';
import EditPost from './components/EditPost';
library.add(faBars, faEllipsisH, faBell, faUser, faEye, faCompass, faHistory, faFire, faPalette, faBullhorn)


const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: "#1e4459",
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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "#1e4459"
  },
  drawerPaper: {

    backgroundColor: "#1e4459"
  },
  drawerContainer: {
    overflow: 'auto',
    backgroundColor: "#1e4459"
  },
}));

const menuItems = [
  {
    text: 'ArtistYouFollow',
    icon: 'eye',
    path: '/ArtistYouFollow'
  },
  {
    text: 'Explore',
    icon: 'compass',
    path: '/'
  },
  {
    text: 'Popular',
    icon: 'fire',
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
  const [cookies, setCookie] = useCookies(['logged']);
  if (Cookies.get('logged') == null) {
    setCookie('logged', false, { path: '/' });
    console.log("Cookie Creada");
  }
  console.log(Cookies.get('logged'));
  return (
    <div className="PrincipalBody">
      <Router>

        <AppBar position="static" className={classes.AppBar}>
          <Toolbar>
          
            <img id="NavBarLogo" src={WebLogo} />
            <div id="PageName" className={classes.title} >FrostArt</div>
            <div className={classes.Search} ></div>
         
            {!JSON.parse(Cookies.get('logged')) ?
              <Link to="/Login"></Link>
              :
              <Link to="/Profile"> <FontAwesomeIcon size="2x" icon="user" /></Link>
            }
            {!JSON.parse(Cookies.get('logged')) ?
              <Link to="/Login"><Button color="inherit">Log in</Button></Link>
              :
              <Button color="inherit" onClick={LogOut}>Log out</Button>
            }
       
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left"
          classes={{
            paper: classes.drawerPaper,
          }}>
          <br />
          <br />
          <br />
          <div className={classes.drawerContainer}>
            <List>
              <ListItem >
              {!JSON.parse(Cookies.get('logged')) ?
              <Link ></Link>
              :
              <Link to='/CreatePost'>
              <label>add Post</label>
            </Link>
            }
              </ListItem>
                <ListItem >
                {!JSON.parse(Cookies.get('logged')) ?
              <Link ></Link>
              :
              <Link to={"/ArtistYouFollow"}>
              <FontAwesomeIcon size="2x" icon={"eye"} />
            </Link>
            }
                 
                </ListItem>
                  <ListItem >
                  <Link to={"/"}>
                    <FontAwesomeIcon size="2x" icon={"compass"} />
                  </Link>
                </ListItem>
                  <ListItem>
                  <Link to={"/Popular"}>
                    <FontAwesomeIcon size="2x" icon={"fire"} />
                  </Link>
                </ListItem>
                  <ListItem >
                  <Link to={"/Themes"}>
                    <FontAwesomeIcon size="2x" icon={"palette"} />
                  </Link>
                </ListItem>
                  <ListItem>
                  <Link to={"/News"}>
                    <FontAwesomeIcon size="2x" icon={"bullhorn"} />
                  </Link>
                </ListItem>
            </List>
          </div>
        </Drawer>

        <div>
          {}
        </div>


        <Switch>
          <Route exact path="/" exact component={HomePage} />
          <Route exact path="/Post/:id" component={Post} />
          <Route exact path="/Login" component={LogIn} />
          <Route exact path="/Tags" component={TagView} />
          <Route exact path="/News" component={NewRelease} />

          <Route exact path="/Themes" component={Themes} />
          <Route exact path="/ArtistYouFollow" component={ArtistYouFollow} />
          <Route exact path="/Popular" component={Popular} />
          <Route exact path='/CreatePost' component={PublicPost} />
          <Route exact path='/Profile' component={Profile} />
          <Route exact path='/TemasTest' component={TemasIndex} />
          <Route exact path='/EditProfile' component={ProfileEdit} />
          <Route exact path='/PictureTest' component={UploadPictureTest} />
          <Route exact path='/ThemePage/:id' component={ThemePage} />
          <Route exact path='/EditPost/:id' component={EditPost}/>   
          <Route exact path='/TagsPage/:id' component={TagsPage} />
        </Switch>


      </Router>
    </div>

  );
}

function LogOut() {
  Cookies.remove("infoUser");
  Cookies.remove("logged");
  window.location.reload();
}

function myfunction() {

  console.log("CLICKED");

}


const WolfPicture = () => (
  <div>
    <h1>WolfPicturePost</h1>
  </div>
)

export default App;
