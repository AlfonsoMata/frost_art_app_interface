import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Home.css'

function HomePage() {
    useEffect(()=>{
        fetchItems();
    },[]);

    const [items,setItems] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch(
           'https://fakestoreapi.com/products?limit=5'
        );

        const items = await data.json();
         console.log(items);
         setItems(items);
    };

    return(
        <div>
            <h1>Home</h1>
            {items.map(item=>(
            <Link key={item.id} to={`/Post/${item.id}`}><img className="ImageShow"  src={item.image}/></Link>
            ))}
             <h1>Tags   </h1>

            <div>
               <div className ="TagImgContainer">
               <Link><img src="https://i.pinimg.com/564x/66/cb/79/66cb797b10e1fe50e39df407d3f91d5f.jpg"></img></Link>
               <div class="centered">Centered</div>
               </div>
               
            </div>


        </div>
    );
}

export default HomePage;