import React,{useState,useEffect} from 'react';
import './App.css';
// import ClassComponent from './components/ClassComponent';
// import FunctionalComponent from './components/FunctionalComponent';
// import ImageGrid from './components/GridImageComponent';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
// import Button from './components/ButtonComponent'

function App() {

  useEffect(()=>{
    fetchItems();
  },[]);

  const [items,setItems] = useState([]);

  const fetchItems = async ()=>{
    const data = await fetch('https://fakestoreapi.com/products?limit=5');




    const items = await data.json();
    console.log(items);
    setItems(items);
    
  };

  return (
    <Router>
    <div>
      <div>
        {/* {items.map(item=>(
          <h1 key ={item.itemid}>{item.name}</h1>
        ))} */}
      </div>
      <p>Esta es mi App</p>
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

const Home = () =>(
  <div>
    <h1>HomePage</h1>
  </div>
)

const WolfPicture = () =>(
  <div>
    <h1>WolfPicturePost</h1>
  </div>
)

export default App;
