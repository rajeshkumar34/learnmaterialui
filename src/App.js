import React from 'react'
import Button from '@material-ui/core/Button';


import './App.css';
import { Grid, makeStyles } from '@material-ui/core'
import Navbar from "./Components/Navbar";
import Leftbar from './Components/Leftbar';
import Rightbar from './Components/Rightbar';
import Feed from './Components/Feed';
import Hello from './Components/Hello';

const useStyle =makeStyles((theme)=>({  
	right:{
		[theme.breakpoints.down("sm")]:{
			display:"none"
		}
	}
}))
const App = ()=>{
	const classes = useStyle()
  return (
		<>
		<div>
		<Navbar/>
		<Grid container>
			<Grid item sm={2} xs={2}>
				<Leftbar/>
			</Grid>
			<Grid item sm={7} xs={10}>
				<Rightbar/>
			</Grid>
			<Grid item sm={3} className={classes.right}>
				<Feed/>
			</Grid>
		</Grid>
	<Hello/>
		</div>
		</>

	);
};
export default App;
