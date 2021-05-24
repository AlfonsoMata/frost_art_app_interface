import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GetHomePost, GetAllEtiquetas } from '../api/PublicacionApi';
import ImageShow from './ImageView';




function HomePage() {

  const [allEtiquetas, setAllEtiquetas] = useState([]);



  useEffect(async () => {
    async function fetchData() {
      const data = await GetAllEtiquetas();
      console.log(data)
      setAllEtiquetas(data);
    }
    fetchData();
    fetchItems()
  }, []);


  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      height: '100%',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: '#102a39',
    },
    gridList: {
      width: 1800,
      height: 750,
    },
  }));

  const useStyles2 = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: '#102a39',
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));


  const classes = useStyles();
  const classes2 = useStyles2();
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await GetHomePost();
    console.log('home data', data);
    setItems(data);
  };

  return (
    <div className="BodyFalso">
      <h1>Home</h1>
      <div className={classes.root}>
        <GridList cellHeight={350} className={classes.gridList} cols={6}>
          {items.map(item => (
            <GridListTile key={item.id} cols={1 || 2}>
              <Link key={item.id} to={`/Post/${item.idPublicacion}`}><ImageShow props={item.idPublicacion}></ImageShow></Link>
            </GridListTile>
          ))}


        </GridList>
      </div>
      <h1>Explore Tags  </h1>
      <div className={classes2.root}>
        <GridList className={classes2.gridList} cols={3}>
          {allEtiquetas.map((item, index) => (
            <div key={index}>
              <Link to={`/TagsPage/${allEtiquetas[index].id}`} >    <GridListTile >
                <img src="https://i.pinimg.com/564x/95/e7/39/95e739a538fa17279fd6c5672e3a9ef4.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" />
                <GridListTileBar
                  title={allEtiquetas[index].nombre}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile></Link>
            </div>
          ))}

        </GridList>
      </div>
      <h1></h1>
      <div className={classes.root}>
        <GridList cellHeight={350} className={classes.gridList} cols={6}>
          {items.map(item => (
            <GridListTile key={item.id} cols={1 || 2}>
              <Link key={item.id} to={`/Post/${item.idPublicacion}`}><ImageShow props={item.idPublicacion}></ImageShow></Link>
            </GridListTile>
          ))}


        </GridList>
      </div>





    </div>
  );
}

export default HomePage;