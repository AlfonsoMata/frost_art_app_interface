import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import { GridList, GridListTile,GridListTileBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';




function HomePage() {
    useEffect(() => {
        fetchItems();
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
          backgroundColor:  '#102a39',
        },
        gridList: {
          flexWrap: 'nowrap',
          // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
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
        const data = await fetch(
            'https://fakestoreapi.com/products?limit=12'
        );

        const items = await data.json();
        console.log(items);
        setItems(items);
    };

    return (
        <div className="BodyFalso">
            <h1>Home</h1>
            <div className={classes.root}>
                <GridList cellHeight={350} className={classes.gridList} cols={6}>
                    {items.map(item => (
                        <GridListTile key={item.id} cols={1 || 2}>
                           <Link key={item.id} to={`/Post/${item.id}`}><img className="ImageShow" src={item.image} alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" /></Link>
                        </GridListTile>
                    ))}


                </GridList>
            </div>
            <h1>Explore Tags  </h1>
                    <div className={classes2.root}>
                      <GridList className={classes2.gridList} cols={3}>
                       
                          <GridListTile >
                            <img  src="https://i.pinimg.com/564x/8f/02/c6/8f02c60a33f46d260328983abbfc8429.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" />
                            <GridListTileBar
                              title="tags"
                              classes={{
                                root: classes.titleBar,
                                title: classes.title,
                              }}
                            />
                          </GridListTile>
                          <GridListTile >
                            <img src="https://i.pinimg.com/564x/8f/02/c6/8f02c60a33f46d260328983abbfc8429.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" />
                            <GridListTileBar
                              title="categoria"
                              classes={{
                                root: classes.titleBar,
                                title: classes.title,
                              }}
                            />
                          </GridListTile>
                          <GridListTile >
                            <img src="https://i.pinimg.com/564x/8f/02/c6/8f02c60a33f46d260328983abbfc8429.jpg" alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" />
                            <GridListTileBar
                              title="categoria"
                              classes={{
                                root: classes.titleBar,
                                title: classes.title,
                              }}
                            />
                          </GridListTile>
             
                      </GridList>
                    </div>
                <h1></h1>
                <div className={classes.root}>
                <GridList cellHeight={350} className={classes.gridList} cols={6}>
                    {items.map(item => (
                        <GridListTile key={item.id} cols={1 || 2}>
                           <Link key={item.id} to={`/Post/${item.id}`}><img className="ImageShow" src={item.image} alt="https://i.pinimg.com/564x/39/a4/34/39a43475ae2487da954620de7de32e06.jpg" /></Link>
                        </GridListTile>
                    ))}


                </GridList>
            </div>

           


        </div>
    );
}

export default HomePage;