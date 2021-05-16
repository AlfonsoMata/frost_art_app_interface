import React, {useState,useEffect} from 'react';
import './Profile.css'
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { positions } from 'react-alert';
import ImageGrid3X3 from './PostRecomendationGrid';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { GridList, GridListTile,GridListTileBar } from '@material-ui/core';
import { Link } from 'react-router-dom';


const menuItems =[
  {
    imageUrl: 'https://i.pinimg.com/236x/72/5e/8e/725e8e4011ad49f186056e7a9b32052b.jpg'
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/28/03/48/2803487d579ac0a2c9fbe1f1d9f0a594.jpg'
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/33/b8/38/33b83873dcaa3f32eb22e48dfe08a59a.jpg'
  },
  {
    imageUrl: 'https://i.pinimg.com/564x/e7/62/34/e76234d6f9dc274ce84942f8eac94ea6.jpg'
  }
  

]


const useStyles = makeStyles((theme) => ({
    large: {
        width: '100px',
        height: '100px',
      },
      root2: {
        flexGrow: 1,
        

      },
      AppBar:{
        backgroundColor:"#1e4459",
        position: 'relative',
        top: '0',
        zIndex: theme.zIndex.drawer + 1,
      },
      menuButton: {
        marginRight: theme.spacing(1),
      },
      title: {
        flexGrow: 1,
      },
  }));

function Profile ({match}){
    const classes = useStyles();

    return(
        <div className="ProfileBody" >
          <div className="Profile">
          <Avatar className={classes.large} src="https://i.pinimg.com/564x/c8/58/ad/c858ad665a8ceceaafe22d58690fce1e.jpg"></Avatar>
          <h2>Sebastian Stan</h2>
          </div>
          <SimpleTabs></SimpleTabs>
          {/* <div className={classes.root2}>
          <AppBar className={classes.AppBar}>
          <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
          </AppBar>
          </div> */}
      
        </div>
      
    );
}

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles2 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'1700px',
    height: '1000px',
    backgroundColor: '#102a39',
  },
}));

export  function SimpleTabs() {
  const classes = useStyles2();
  const classes2 = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Gallery" {...a11yProps(1)} />
          <Tab label="Favorites" {...a11yProps(2)} />
          <Tab label="Posts" {...a11yProps(3)} />
          <Tab label="About" {...a11yProps(4)} />
          <Tab label="Stats" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div className={classes2.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4}>
        <h2>Spot Ligth</h2>
        <ImageGrid3X3></ImageGrid3X3>
        </Grid>
        <Grid item xs={12} sm={8}>
         <h2>About Me</h2>
         <div className="TextPanel" >
           <h2>Birthday y cosas</h2>
         </div>
        </Grid>
      </Grid>
    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={classes.root2}>
                <GridList cellHeight={350} className={classes.gridList} cols={6}>
                    {menuItems.map(item => (
                        <GridListTile key={item.imageUrl} cols={1 || 2}>
                           <Link key={item.imageUrl} to={`/Post/${1}`}><img className="ImageShow" src={item.imageUrl} /></Link>
                        </GridListTile>
                    ))}


                </GridList>
            </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.root2}>
                <GridList cellHeight={350} className={classes.gridList} cols={6}>
                    {menuItems.map(item => (
                        <GridListTile key={item.imageUrl} cols={1 || 2}>
                           <Link key={item.imageUrl} to={`/Post/${1}`}><img className="ImageShow" src={item.imageUrl} /></Link>
                        </GridListTile>
                    ))}


                </GridList>
            </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className={classes.root2}>
                <GridList cellHeight={350} className={classes.gridList} cols={6}>
                    {menuItems.map(item => (
                        <GridListTile key={item.imageUrl} cols={1 || 2}>
                           <Link key={item.imageUrl} to={`/Post/${1}`}><img className="ImageShow" src={item.imageUrl} /></Link>
                        </GridListTile>
                    ))}


                </GridList>
            </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <h2>about </h2>
      <div className="TextPanel" >
           <h2>Birthday y cosas</h2>
         </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className={classes.root2}>
                <GridList cellHeight={350} className={classes.gridList} cols={6}>
                    {menuItems.map(item => (
                        <GridListTile key={item.imageUrl} cols={1 || 2}>
                          <div> Stats </div>
                        </GridListTile>
                    ))}


                </GridList>
            </div>
      </TabPanel>
    </div>
  );
}


export default Profile;