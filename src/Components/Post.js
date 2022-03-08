import { Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography,Button } from '@material-ui/core';
import {useState} from 'react'
const useStyle =makeStyles((theme)=>({
	Card:{
		marginBottom:theme.spacing(5)

	},
	media:{
		height:250,
		[theme.breakpoints.down("sm")]:{
			height:150,
		}
	},
	 
}))
const Post = ()=>{
	const[open,setOpen]= useState(false)
	const classes = useStyle();
  return (
		<>
		  <Card className={classes.Card}>
				<CardActionArea>
					<CardMedia  className={classes.media} image="https://www.treehugger.com/thmb/XOXmyKnkWf-eo3RLULeWaT0xDaQ=/1024x768/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2016__02__fog-bitterroot-mountains-4807feab43334256aded341517fae38f.jpg"
          title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant='h5'>My First Post</Typography>
						<Typography variant='boby 2'>
						This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
					</Typography>
					</CardContent>	
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">Share</Button>
					<Button size="small" color="primary" onClick={()=>setOpen(true)}>Learn More</Button>
				</CardActions>
				<CardActionArea>
					<CardMedia  className={classes.media} image="https://www.weekendthrill.com/wp-content/uploads/2016/08/Spiti-Kinnur-Bhabha-Trek.jpg"
          title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant='h5'>My First Post</Typography>
						<Typography variant='boby'>
						This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
					</Typography>
					</CardContent>	
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">Share</Button>
					<Button size="small" color="primary">Learn More</Button>
				</CardActions>
				<CardActionArea>
					<CardMedia  className={classes.media} image="https://i.ytimg.com/vi/XugOis-kYFw/sddefault.jpg"
          title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant='h5'>My First Post</Typography>
						<Typography variant='boby'>
						This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
					</Typography>
					</CardContent>	
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">Share</Button>
					<Button size="small" color="primary">Learn More</Button>
				</CardActions>
				
			</Card>
		</>

	)
};
export default Post;