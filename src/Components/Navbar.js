import React, { useState } from 'react'
import Search from '@material-ui/icons/Search';
import { styles, alpha } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Notifications from '@material-ui/icons/Notifications';
import Mail from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';



import { AppBar, InputBase, makeStyles, Toolbar,Typography } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

const useStyle =makeStyles((theme)=>({ 
	Toolbar:{
		display:"flex",
		justifyContent:"space-between"
	},
	logoLg:{
		display:"none",
		[theme.breakpoints.up("sm")]:{
		  display:"block",
		},
	},
	logoSm:{
		display:"block",
		[theme.breakpoints.up("sm")]:{
			display:"none",
		},
	},
	search:{
		display:"flex",
		alignContent:"center",
		alignsearch:"center",
		backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
     backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
		borderRadius:theme.shape.borderRadius,
		width:"50%",
		[theme.breakpoints.down("sm")]:{
			display:(props)=> (props.open ? "flex" : "none"),
			width:"70%",
		},	
	},
	input:{
		color:"white",
		marginLeft:theme.spacing(1),
	},
	Cancel:{
    [theme.breakpoints.up("sm")]:{
		display:"none",
		},
	},	
	SearchButton:{
    marginRight:theme.spacing(2),
		[theme.breakpoints.up("sm")]:{
			display:"none",
		},	
	},
	icons:{ 
		alignItems:"center",
		display:(props)=> (props.open ? "none" : "flex"),
		
	},
	Badge:{
    marginRight:theme.spacing(2),
	},
}));
const Navbar = ()=>{
	const [open,setOpen] = useState(false);
	const classes = useStyle({ open });
  return (
		<>
		<AppBar position='flex'>
			<Toolbar className={classes.Toolbar}>
        <Typography variant="h5" className={classes.logoLg}>
         Facebook
       </Typography>
			 <Typography variant="h5" className={classes.logoSm}>
				 travel 
       </Typography>

			 <div className={classes.search}>
				 <Search/>
				 <InputBase placeholder="Search... " className={classes.input}/>
				 <Cancel className={classes.Cancel} onClick={()=>setOpen(false)}/>
			 </div> 
			 <div className={classes.icons}>
			    <Search className={classes.SearchButton} onClick={()=>setOpen(true)}/>
			    <Badge badgeContent={4} color="secondary" className={classes.Badge}>
          <Mail /> 
          </Badge>
					<Badge badgeContent={2} color="secondary" className={classes.Badge}>
          <Notifications/>
          </Badge>
					<Avatar alt="Remy Sharp" src="https://static.remove.bg/remove-bg-web/726c8211ef4fdb5ce44accdf843f9bab4d2a356a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" />
			 </div>
			</Toolbar>
		</AppBar>
		</>

	)
	}
export default Navbar;
