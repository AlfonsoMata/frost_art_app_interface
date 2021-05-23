import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GetAll,GetTopThemes } from '../api/TemasApi.js';

function Themes() {
  const [Temas, setTemas] = useState([]);
  const [TopThemes,setTopThemes] = useState([]);

  useEffect(async () => {
    async function fetchData() {
      const TemasRes = await GetAll();
      const TemasTopRes = await GetTopThemes();
      setTemas(TemasRes);
      console.log(Temas);
    }

    fetchData();
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
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
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
      height: '100%'
    },
    title: {
      color: theme.palette.primary.light,
    },
    Fotos:{
      height:"200px"
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));

  const classes = useStyles();
  const classes2 = useStyles2();
  return (
    <div className="BodyFalso">
      <h1> TOP Themes</h1>
      <div className={classes.root}>
        <GridList className={classes2.gridList} cols={3}>
          {Temas.map((item, index) => (
            <Link to="">
              <GridListTile className={classes.Fotos}>
                <img  key={index} src={item.imagen} />
                <GridListTileBar
                  title={item.nombre}
                  classes2={{
                    root: classes2.titleBar,
                    title: classes2.title,
                  }}
                />
              </GridListTile>
            </Link>

          ))}



        </GridList>
      </div>
      <h1> Themes</h1>
      <div className={classes.root}>
        <GridList cellHeight={350} className={classes.gridList} cols={6}>
          {Temas.map(item => (
            <GridListTile key={item.id} cols={1 || 2}>
              <Link key={item.id} to={`/ThemePage/${item.id}`}><img className="ImageShow" src={item.imagen} alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" /></Link>
              <GridListTileBar
                title={item.nombre}
                classes2={{
                  root: classes2.titleBar,
                  title: classes2.title,
                }}
              />
            </GridListTile>
          ))}


        </GridList>
      </div>
    </div>
  );
}

export default Themes;