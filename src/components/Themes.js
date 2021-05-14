import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { GridList, GridListTile,GridListTileBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Themes() {
    useEffect(()=>{
    },[]);

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


    const classes2 = useStyles2();
    return(
        <div className="BodyFalso">
        <h1> TOP Themes</h1>
        <div className={classes2.root}>
                      <GridList className={classes2.gridList} cols={3}>
                       
                          <GridListTile >
                            <img  src="https://i.pinimg.com/564x/8f/02/c6/8f02c60a33f46d260328983abbfc8429.jpg" />
                            <GridListTileBar
                              title="tags"
                              classes2={{
                                root: classes2.titleBar,
                                title: classes2.title,
                              }}
                            />
                          </GridListTile>
                          <GridListTile >
                            <img src="https://i.pinimg.com/564x/8f/02/c6/8f02c60a33f46d260328983abbfc8429.jpg" />
                            <GridListTileBar
                              title="categoria"
                              classes2={{
                                root: classes2.titleBar,
                                title: classes2.title,
                              }}
                            />
                          </GridListTile>
                          <GridListTile >
                            <img src="https://i.pinimg.com/564x/8f/02/c6/8f02c60a33f46d260328983abbfc8429.jpg" />
                            <GridListTileBar
                              title="categoria"
                              classes2={{
                                root: classes2.titleBar,
                                title: classes2.title,
                              }}
                            />
                          </GridListTile>
             
                      </GridList>
                    </div>
        <h1> Themes</h1>
        </div>
    );
}

export default Themes;