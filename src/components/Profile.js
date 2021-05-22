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
import {GetFavPost} from '../api/UsersApi'
import ImageView from './ImageView';
import {GetUserPosts} from '../api/PublicacionApi';
import Cookies from 'js-cookie';





const menuItems =[
  {
    imageUrl: 'https://i.pinimg.com/236x/72/5e/8e/725e8e4011ad49f186056e7a9b32052b.jpg',
    idPublicacion: "1"
  },
  {
    imageUrl: 'https://i.pinimg.com/236x/72/5e/8e/725e8e4011ad49f186056e7a9b32052b.jpg',
    idPublicacion: "2"
  },
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
    const [ProfileUser,SetProfileUser]= useState(JSON.parse(Cookies.get('userInfo')));
   
    useEffect(async()=>{
      async function fetchData(){
        console.log('Cosas',ProfileUser.data[0]);
      }
    
      fetchData();
      },[]);

    return(
        <div className="ProfileBody" >
          <div className="Profile">
          <Avatar className={classes.large} src={ProfileUser.data[0].fotoPerfil}></Avatar>
          <h2>{ProfileUser.data[0].nombre}</h2>
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
          {children}
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

  const [FavoritePost,setFavPost ] = useState([]);
  const [myPosts,setMyPosts] = useState([]);
  const [ProfileUser,SetProfileUser]= useState(JSON.parse(Cookies.get('userInfo')));
  

    useEffect(async()=>{
    async function fetchData(){
        const FavRes = await GetFavPost(ProfileUser.data[0].id);
        const myPostRest = await GetUserPosts(ProfileUser.data[0].id);
        setFavPost(FavRes);
        setMyPosts(myPostRest);
        console.log('misPost',myPostRest);
        console.log('FavoritePost',FavoritePost);


    }
  
    fetchData();
    },[]);
    
  const classes = useStyles2();
  const classes2 = useStyles();
  const [value, setValue] = useState(0);

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
          <Tab label="About" {...a11yProps(3)} />
          <Tab label="Stats" {...a11yProps(4)} />
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
           <h2>{ProfileUser.data[0].descripcion}</h2><br></br>
           <h2>My birthday: {ProfileUser.data[0].fechaNacimiento}</h2>
         </div>
        </Grid>
      </Grid>
    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className={classes.root2}>
                <GridList cellHeight={350} className={classes.gridList} cols={6}>
                {myPosts.map((Post,index) => (
                        <GridListTile key={Post.idPublicacion} cols={1 || 2}>
                           <Link key={Post.idPublicacion} to={`/Post/${Post.idPublicacion}`}><ImageView  props={Post.idPublicacion}></ImageView></Link>
                        </GridListTile>
                    ))}



                </GridList>
            </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.root2}>
                <GridList cellHeight={350} className={classes.gridList} cols={6}>

                {FavoritePost.map((item,index)=>(
                <GridListTile key={item.idpublicacion} cols={1 || 2}>
                <Link key={item.idpublicacion} to={`/Post/${item.idpublicacion}`}><ImageView  props={item.idpublicacion}></ImageView></Link>
             </GridListTile>
               
                  ))}
                    {/* {menuItems.map(item => (
                        <GridListTile key={item.imageUrl} cols={1 || 2}>
                           <Link key={item.imageUrl} to={`/Post/${1}`}><img className="ImageShow" src={item.imageUrl} /></Link>
                        </GridListTile>
                    ))} */}


                </GridList>
            </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <h2>about </h2>
      <div className="TextPanel" >
      <h2>{ProfileUser.data[0].descripcion}</h2><br></br>
           <h2>My birthday: {ProfileUser.data[0].fechaNacimiento}</h2>
         </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
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