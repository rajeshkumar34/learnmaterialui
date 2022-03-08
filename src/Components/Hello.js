import React, { useState } from 'react'

import { Tooltip,Fab, makeStyles,Modal, Container, MenuItem,RadioGroup,FormControlLabel,Radio,FormLabel,Button,Snackbar} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { green } from '@material-ui/core/colors';
import MuiAlert from '@material-ui/lab/Alert';

import { TextField } from '@material-ui/core';

const useStyle =makeStyles((theme)=>({
	fab:{
		position:"fixed",
		bottom:20, 
		right:20,
		color:"secondary",
	},
	Container:{
		width:500,
		height:440,
		backgroundColor:"white",
		position:"absolute",
		top:0,
		bottom:0,
		left:0,
		right:0,
		margin:"auto",
	},
	form:{
		padding:theme.spacing(2)
	},
	item:{
		marginBottom:theme.spacing(3)
	},
}));



const Hello = ()=>{
const[open,setOpen]	=useState(false)
 const[openAlert,setOpenAlert]	=useState(false)
	const classes = useStyle();
	const handleClick = () => {
    setOpen(true);
  };
	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
	
		setOpenAlert(false);
	};

  return (
		<>
		  <Tooltip title="add" onClick={()=>setOpen(true)}>
		   <Fab color="secondary " className={classes.fab}>
			 <AddIcon sx={{ color: green[500] }}>add_circle</AddIcon>
        </Fab>
	      </Tooltip>
				<Modal 
				open={open}>
         <Container className={classes.Container}>
					 <form className={classes.form} autoComplete="off">
						 <div className={classes.item}>
						 <TextField id="outlined-basic" label="Title"  size="small" style={{width:"100%"}}/>
						 </div>
						 <div className={classes.item}>
						 <TextField 
						  id="outlined-basic-multiline-static"
              label="Multiline"
              rows={4}
              defaultValue="Tell your story... "
               variant="outlined" 
							   size="small" style={{width:"100%"}}/>
						 </div>
						 <div classesName={classes.item}>
							 <TextField select label="Visibility" value="Public">
								 <MenuItem value="Public">Public</MenuItem>
								 <MenuItem value="Private">Private</MenuItem>
								 <MenuItem Value="Unlisted">Unlisted</MenuItem>
							 </TextField>
						 </div>
						 <div>
						 <FormLabel id="demo-radio-buttons-group-label">Who 		can Comment?</FormLabel>
						 <RadioGroup>
                <FormControlLabel value="Everybody" control={<Radio Size="small"/>} label="Everybody" />
                <FormControlLabel value="My Friends" control={<Radio Size="small"/>} label="My Friends" />
								<FormControlLabel value="Nobody" control={<Radio Size="small"/>} label="Nobody" />
								<FormControlLabel value="Custom" disabled control={<Radio Size="small" />} label="Custom(primi)"/>
								
              </RadioGroup>
						 </div>
						 <div classesName={classes.item}>
							 <Button variant="outlined" color="primary" style={{marginRight:16}} onClick={()=>setOpenAlert(true)}>
								 Create
								 </Button>
							 <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>
								 Cancel
								 </Button>
							 </div>
						 </form>
					 </Container>
				</Modal>
				<Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose}
				>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
		</>
	);
};
export default Hello;