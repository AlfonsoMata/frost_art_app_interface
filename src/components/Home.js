import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

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
            {items.map(item=>(
            <Link to={`/Home/${item.id}`}><img key={item.id} src={item.image}/></Link>
            ))}
        </div>
    );
}

export default HomePage;