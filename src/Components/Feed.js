import React from 'react'


import { Container, makeStyles } from '@material-ui/core';

const useStyle =makeStyles((theme)=>({
	Container:{
		paddingTop: theme.spacing(10),
	}
}))
const Feed = ()=>{
	const classes = useStyle()
  return (
		<>
		<Container className={classes.Container}>
			
		
		</Container>
		</>

	);
};
export default Feed;