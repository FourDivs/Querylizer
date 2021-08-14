import React, { Fragment, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, Popover } from '@material-ui/core';
import logo from '../../assets/NavQuery.png';
import { Link } from 'react-router-dom';


import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Information from './Information';

//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { userSignIn, userLogout } from '../../actions';

//firebase
import firebase from 'firebase/app';
import 'firebase/auth';
var provider = new firebase.auth.GoogleAuthProvider();

const Navbar = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(userSignIn(result.user));
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleLogut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('logout');
        dispatch(userLogout());
      })
      .catch((error) => {
        console.log('logout Error');
      });
  };

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
      <AppBar position="static" style={{ backgroundColor: '#151515' }}>
        <Toolbar>
          <img src={logo} style={{ maxWidth: '35px', maxHeight: '35px' }} alt="SyntaxMeets" />
          <Typography variant="h5" style={{ color: 'white', fontFamily: 'poppins' }}>
            &nbsp;
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
              <span style={{ fontWeight: '700' }}>Query</span>lizer
            </Link>
          </Typography>
          <div style={{ fontFamily: 'poppins', marginLeft: '30%', fontWeight: '600', color: 'white' }}>
            {user?.email ? (
              <Fragment>
                <VerifiedUserIcon style={{ color: '#7ed957' }} />
                {`Welcome ${user.displayName}`}
              </Fragment>
            ) : (
              <Fragment>
                <AssignmentLateIcon style={{ color: '#ff5757' }} />
                {'  Please Login to save diagrams !'}
              </Fragment>
            )}
          </div>
          <div
            onClick={handleClick}
            style={{
              fontFamily: 'poppins',
              marginLeft: 'auto',
              fontWeight: '600',
              color: '#F7D800',
              cursor: 'pointer',
            }}
          >
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
            <Information />
          </Popover>
          <div style={{ fontFamily: 'poppins', marginLeft: '15px', fontWeight: '600', color: 'white' }}>
            {user ? (
              <div onClick={handleLogut} style={{ cursor: 'pointer' }}>
                {' '}
                Logout <ExitToAppIcon />{' '}
              </div>
            ) : (
              <div onClick={handleLogin} style={{ cursor: 'pointer' }}>
                {' '}
                Login <MeetingRoomIcon />{' '}
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
