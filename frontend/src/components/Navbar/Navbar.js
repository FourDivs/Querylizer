import React, { Fragment,useContext,useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, Popover } from '@material-ui/core';
import logo from '../../assets/NavQuery.png'
// import PersonIcon from '@material-ui/icons/Person';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'; 
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { UserContext } from "../../context/UserContext";
import Information from './Information'


const Navbar = (props) => {

    const context = useContext(UserContext);
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
            <AppBar position="static" style={{ backgroundColor: "#151515"}}>
            <Toolbar>
                <img src={logo} style={{ maxWidth: "35px", maxHeight: "35px" }} alt = 'SyntaxMeets'/>
                <Typography variant="h5" style={{ color: "white", fontFamily: "poppins"}}>
                    &nbsp;<span style={{ "fontWeight": "700"}}>Query</span>lizer
                </Typography>
                
                <div style={{ fontFamily: "poppins", marginLeft: "30%", fontWeight: "600", color: "white" }}>
                    <VerifiedUserIcon style = {{color: "#7ed957"}}/> { context.user?.email ? ("Welcome User ! " + context.user.email) : "Welcome Guest !"}   
                </div>
                <div  onClick={handleClick} style={{ fontFamily: "poppins", marginLeft: "auto", fontWeight: "600", color: "#F7D800" }}>
                    <InfoOutlinedIcon />
                </div>
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
                    <Information/>
                </Popover>
                <div style={{ fontFamily: "poppins", marginLeft: "15px", fontWeight: "600", color: "white"}}>
                    <ExitToAppIcon /> Logout
                </div>
            </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Navbar;