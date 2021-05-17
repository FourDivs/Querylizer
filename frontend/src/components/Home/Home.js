import Container from "react-bootstrap/Container";
import classes from "./Home.module.css";
import logo from "../../assets/Query.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from "atomize";
import { Row, Col} from "react-bootstrap";
//import wallIamge from "../../assets/square_mid_light.svg"
import { Link } from "react-router-dom";


//REDUX
import {useSelector, useDispatch} from "react-redux"
import { userSignIn, userLogout } from "../../actions";

//firebase 
import firebase from "firebase/app";
import "firebase/auth"
var provider = new firebase.auth.GoogleAuthProvider();

const Home = () => {

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      dispatch(userSignIn(result.user));
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }

  const handleLogut = () => {
    firebase.auth().signOut().then(() => {
      console.log("logout")
      dispatch(userLogout());
    }).catch((error) => {
      console.log("logout Error")  
    });
  }

  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      localStorage.setItem('authUser', JSON.stringify(user));
      // window.location = '/visualizer';
    }
    else{
      localStorage.removeItem('authUser');
    }
  });

  return (
    
    // <div style = {{backgroundImage: `url(${wallIamge})`}}>
    <div className = {classes.home}>  
      <Navbar>
        <div className = {classes.home__navbar__brand}>
          <Link to="/" style={{color:"#000", textDecoration: 'none'}}><img src={logo} className = {classes.home__navbar__brand__logo} alt="Querylizer" />
          <span style={{ fontWeight: "800" }}>Query</span>lizer
          </Link>
        </div>
        <div style={{ fontSize: "1.7rem", paddingTop: "10px", paddingRight: "30px"}} className="ml-auto">
          <Nav>
            <Nav.Link href="#home" className = {classes.home__navbar__logo}>
              <i className= {"far fa-envelope " + classes.home__navbar__icons}></i>
            </Nav.Link>
            <Nav.Link href="https://github.com/kothariji/Querylizer">
              <i className = {"fab fa-github " + classes.home__navbar__icons}></i>
            </Nav.Link>
            <Nav.Link>              
              {user?.email ? (<span onClick = {handleLogut}>
                <i className= {"fas fa-sign-out-alt " + classes.home__navbar__icons}></i>                
                </span>) : (<span onClick = {handleLogin}>
                <i className= {"fas fa-sign-in-alt " + classes.home__navbar__icons}></i>                 
                </span>)}
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <br />
      <br />
      <br />
      <br />
      <Container className="text-center">
        <div>
          <h1 className = {classes.home_h1_text}>
            Create Stunning 🚩 Blazing ⚡ Interactive 🧠{" "}
            <span className={classes.home_span_gradient}>
              <br/>
    
              Database Diagrams{" "}
            </span>
            🚀
          </h1>
        </div>
        <br />
        {/* <h2 style={{ fontSize: "2.0rem", fontWeight: "300" }}> */}
        <h2><span className = {classes.home_h2_text}>
          Say Hi 👋 to the No Code Era
          </span>
        </h2>
        <br />
        <Row>
              <Col sm={{ size: 'auto', offset: 1 }} className = {classes.home_button_col}>
                {user?.email ? (<Button onClick = {handleLogut} shadow="3" hoverShadow="4" m={{ r: "1rem" }} className = {classes.home_button}>
                  Logout &nbsp; <i className= {"fas fa-sign-out-alt "}></i>                
                </Button>) : (<Button onClick = {handleLogin} shadow="3" hoverShadow="4" m={{ r: "1rem" }} className = {classes.home_button}>
                  Login &nbsp; <i className= {"fas fa-sign-in-alt "}></i>                   
                </Button>)}
                <Link to="/visualizer" style = {{textDecoration: 'none'}}>
                  <Button
                    shadow="3"
                    hoverShadow="4"
                    m={{ r: "1rem" }}
                    className = {classes.home_button}
                  >                   
                    { user?.email ? `Welcome ${user.displayName} `: "Continue as a Guest "}   
                    &nbsp;<i className= {"fas fa-user"}></i>
                  </Button>
                </Link>
                    
                <Link to="/aboutus" style = {{textDecoration: 'none'}}>                      
                  <Button
                    shadow="3"
                    hoverShadow="4"
                    m={{ r: "1rem" }}
                    className = {classes.home_button}
                    // onClick={addNewNode}
                  >About Us &nbsp; <i className={"fas fa-info-circle"}></i>
                  </Button>
                </Link>
              </Col>
        </Row>
        <br />
        <h2 className = {classes.home_h2_last_text}>
          Easily convert your Database Diagram to code 👩‍💻 Hassle Free💡
        </h2>
        <br />
        <br />
      </Container>
    </div>
  );
}


export default Home;