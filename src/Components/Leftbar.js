import React from 'react'
 
import { makeStyles,Container,Box, Typography, List } from '@material-ui/core';
import { Apps, Home, Person, PlayCircleFilled, PlayCircleOutline } from '@material-ui/icons';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Camera from '@material-ui/icons/Camera';
import CollectionsIcon from '@material-ui/icons/Collections';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const useStyle =makeStyles((theme)=>({ 
	Container:{
		height:"100vh",
		color:"white",
		paddingTop: theme.spacing(10),
		backgroundColor:theme.palette.primary.main,
		position:"sticky",
		Top:0,
		[theme.breakpoints.up("sm")]:{
			 backgroundColor:"white",
			 color:"#555", 
			 border:"1px solid #ece7e7" 
		},
	},
	item:{
		display:"flex",
		alignItems:"center",
		marginBottom:theme.spacing(4),
		[theme.breakpoints.up("sm")]:{
			marginBottom:theme.spacing(3),
			cursor:"pointer"   
		},
	}, 	
	icon:{
		fontSize:500,
    marginRight:theme.spacing(1),
		[theme.breakpoints.up("sm")]:{
			fontSize:"18px"  
		}, 
	},
	text: {
		[theme.breakpoints.down("sm")]:{
			display:"none",	  
		},

	}
 }))
const Leftbar = ()=>{
	const classes = useStyle()
	
  return (
		<>
	    <Container className={classes.Container}>
				<div className={classes.item}>
          <Home className={classes.icon}/>
					<Typography className={classes.text}>Homepage</Typography>
				</div>
				<div className={classes.item}>
          <Person className={classes.icon}/>
					<Typography className={classes.text}>Friends</Typography>
				</div>
				<div className={classes.item}>
          <FormatListBulletedIcon className={classes.icon}/>
					<Typography className={classes.text}>Lists</Typography>
				</div>
				<div className={classes.item}>
          <Camera className={classes.icon}/>
					<Typography className={classes.text}>Camera</Typography>
				</div>
				<div className={classes.item}>
          <PlayCircleOutlineIcon className={classes.icon}/>
					<Typography className={classes.text}>Videos</Typography>
				</div>
				<div className={classes.item}>
          <Apps className={classes.icon}/>
					<Typography className={classes.text}>Apps</Typography>
				</div>
				<div className={classes.item}>
          <CollectionsIcon className={classes.icon}/>
					<Typography className={classes.text}>Collections</Typography>
				</div>
				<div className={classes.item}>
          <StorefrontIcon className={classes.icon}/>
					<Typography className={classes.text}>Market Place</Typography>
				</div>
				<div className={classes.item}>
          <SettingsApplicationsIcon className={classes.icon}/>
					<Typography className={classes.text}>Settings</Typography>
				</div>
				<div className={classes.item}>
          < ExitToAppIcon className={classes.icon}/>
					<Typography className={classes.text}>Logout</Typography>
				</div>
				
				
				

				
				
        
      </Container>
		</>

	)
	}
export default Leftbar;
