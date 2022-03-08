import {createTheme} from '@material-ui/core';
import {blue} from '@material-ui/core/colors'
 const theme = createTheme({
	palette:{
		primary:{
			main:blue[50],
		},
	},
	myButton:{
		backgoundColor:"red",
		color:"white",
		border:"1px solid black",


	}
});
export default theme;