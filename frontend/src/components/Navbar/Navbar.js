// import React, { Fragment ,useState} from "react";
// import AppBar from '@material-ui/core/AppBar';
// import { Toolbar, Typography, Button} from '@material-ui/core';
// import Query from "../../assets/Query.png"

import React, { Fragment,useContext,useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, Button,Popover ,IconButton} from '@material-ui/core';
import logo from '../../assets/Query.png'
import PersonIcon from '@material-ui/icons/Person';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'; 
import { UserContext } from "../../context/UserContext";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
}));

const Navbar = (props) => { 
    const classes = useStyles();
    const context = useContext(UserContext)
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Fragment>
            <AppBar position="static" style={{ 'backgroundColor': "#000A29" }}>
            <Toolbar>
                <img src={logo} style={{ 'maxWidth': "50px", 'maxHeight': "50px" }} alt = 'SyntaxMeets'/>
                <Typography variant="h5" style={{ "color": "white", 'fontFamily': "poppins"}}>
                    &nbsp;<span style={{ "fontWeight": "700"}}>Query</span>lizer
                </Typography>
                
                <Button variant="contained" startIcon={<PersonIcon />} color = "secondary" style={{ 'fontFamily': "poppins", 'marginLeft': "30%", 'fontWeight': "600", 'color': "white" }}>
                Welcome User !{/*  {context.user.email} */}
                </Button>

                <Button variant="contained" startIcon={<InfoOutlinedIcon />} onClick={handleClick} color = "primary" style={{ 'fontFamily': "poppins", 'marginLeft': "auto", 'fontWeight': "600", 'color': "white" }}>
                Info
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography}>Lets Give the details What to do.</Typography>
                </Popover>

                <Button variant="contained" startIcon={<ExitToAppIcon />} color = "secondary" style={{ 'fontFamily': "poppins", 'marginLeft': "15px", 'fontWeight': "600", 'color': "white" }}>
                Logout
                </Button>
            </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Navbar;