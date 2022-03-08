import React from 'react'
import { makeStyles,Container  } from '@material-ui/core';


import Post from './Post'; 
import { FormatAlignCenter } from '@material-ui/icons';

const useStyle =makeStyles((theme)=>({
	Container:{
		paddingTop: theme.spacing(10),
	}
  }))
const Rightbar = ()=>{
	const classes = useStyle()
  return (
		<>
		
		  <Container className={classes.Container}><Post/>
			 
			</Container>;
    
		</>

	);
};
export default Rightbar;