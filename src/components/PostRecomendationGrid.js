import React , {useState,useEffect} from 'react';
import './RecomendationGrid.css'
import {Link,Switch} from 'react-router-dom';


export const ImageGrid3x3 = (props) => {
    useEffect(()=>{
        fetchItems();
        console.log(props);
    },[]);

    const [items,setItems] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('https://fakestoreapi.com/products?limit=9');

        const items = await data.json();
         console.log(items);
         setItems(items);
    };



    return (
        
        <div className="GridContainer" >
            
               {items.map(item=>(
            <Link key={item.id}  to={`/Post/${item.id}`}><div  className ="ImageContainer"><img  src ={item.image} /></div></Link>
            ))}
            {/* <div className ="ImageContainer"><img src ="https://i.pinimg.com/564x/6e/51/99/6e5199ef824f3b2140f4c4e624488e82.jpg"></img></div>
            <div className ="ImageContainer"><img src ="https://i.pinimg.com/564x/fd/1a/20/fd1a20fd80726be2caca865df6121815.jpg"></img></div>
            <div className ="ImageContainer"><img src ="https://i.pinimg.com/564x/14/d6/b9/14d6b900e4fa9918b3e84342ff638a02.jpg"></img></div>
            <div className ="ImageContainer"><img src ="https://i.pinimg.com/564x/f7/27/d0/f727d0bfdb1d9dfec81859e55648bad2.jpg"></img></div>
            <div className ="ImageContainer"><img src ="https://i.pinimg.com/564x/28/7f/e5/287fe5b0c1880119e743e733e1f881c0.jpg"></img></div>
            <div className ="ImageContainer"><img src ="https://i.pinimg.com/564x/aa/54/5b/aa545b3d1518c60da8358de05a7a8faf.jpg"></img></div>
            <div className ="ImageContainer"><img src ="https://i.pinimg.com/564x/97/f4/4c/97f44c9b31af39b7fb6304c8bacd581a.jpg"></img></div>
            <div className ="ImageContainer"><img src ="https://i.pinimg.com/564x/8d/db/f5/8ddbf531e38bd08fad660dc43b6c014a.jpg"></img></div>
            <div className ="ImageContainer"><img src ="https://i.pinimg.com/564x/64/dc/ee/64dceec998e74df3090b1e8bc7d75133.jpg"></img></div> */}
        </div>
        
    ); 
}


export default ImageGrid3x3;