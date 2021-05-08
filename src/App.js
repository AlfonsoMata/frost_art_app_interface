import React,{useState,useEffect} from 'react';
import './App.css';
// import ClassComponent from './components/ClassComponent';
// import FunctionalComponent from './components/FunctionalComponent';
// import ImageGrid from './components/GridImageComponent';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
// import Button from './components/ButtonComponent'
import HomePage from './components/Home';
import Post from './components/Post';
import LogIn from './components/LogIn';
import NavBar2 from './components/NavBar2';

//Font Awesome
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faEllipsisH, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faEllipsisH, faBell, faUser)
//

function App() {

  return (
    <Router>
    <div>
      <div>
        {/* {items.map(item=>(
          <h1 key ={item.itemid}>{item.name}</h1>
        ))} */}
      </div>
      <NavBar2></NavBar2>
      <Link to ="/Home">
      <li>Home</li>
      </Link>
      <Link to ="/Login">
      <li>Login</li>
      </Link>
      <Switch>
        <Route path = "/Home" exact component = {HomePage}/>
        <Route path = "/Post/:id"  component={Post}/>
        <Route path = "/Login" component={LogIn}/>
      </Switch>
     
      {/* <Link to ="/">
      <li>Home</li>
      </Link>
      <Link to ="/Wolf">
      <li>Agua</li>
      </Link>
      <Link to = "/components/GridImageComponent">
      <img src="https://i.pinimg.com/564x/b4/31/a0/b431a0b1700aa25b61122fd6dba9152c.jpg"></img>
      </Link>
      
      <Button children={<img src="https://i.pinimg.com/564x/cb/4c/a9/cb4ca9f72097402f62c7c5dd7bd3d5e1.jpg"></img>}></Button>
      <ClassComponent/>
      <FunctionalComponent propText="Isac and his mother"/>
      <Switch>
      <Route path = "/components/GridImageComponent" component={ImageGrid}/>
      <Route path = "/" exact component={Home}/>
      <Route path = "/Wolf" exact component={WolfPicture}/>
      </Switch> */}
    
    </div>
    </Router>
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
