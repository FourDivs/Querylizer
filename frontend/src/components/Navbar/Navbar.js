import React, { Fragment, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, Popover } from '@material-ui/core';
import logo from '../../assets/NavQuery.png';
import { Link } from 'react-router-dom';
import Information from './Information';


//SVGs
import { ReactComponent as InfoOutlinedIcon } from '../../assets/icons/info-outlined.svg';
import { ReactComponent as ExitToAppIcon } from '../../assets/icons/exit-to-app.svg';
import { ReactComponent as VerifiedUserIcon } from '../../assets/icons/verified-user.svg';
import { ReactComponent as AssignmentLateIcon } from '../../assets/icons/assignment-late.svg';
import { ReactComponent as MeetingRoomIcon } from '../../assets/icons/meeting-room.svg';

//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { userSignIn, userLogout } from '../../actions';

//firebase
import firebase from 'firebase/app';
import 'firebase/auth';
var provider = new firebase.auth.GoogleAuthProvider();

const Navbar = () => {
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
      .catch(() => {
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
                <VerifiedUserIcon style={{ fill: '#7ed957', height: '25px' }} />
                {`Welcome ${user.displayName}`}
              </Fragment>
            ) : (
              <Fragment>
                <AssignmentLateIcon style={{ fill: '#ff5757', height: '25px' }} />
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
                Logout <ExitToAppIcon style={{ fill: '#fff', height: '25px' }} />{' '}
              </div>
            ) : (
              <div onClick={handleLogin} style={{ cursor: 'pointer' }}>
                {' '}
                Login <MeetingRoomIcon style={{ fill: '#fff', height: '25px' }} />{' '}
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
