import Container from "react-bootstrap/Container";
import classes from "./Home.module.css";
import logo from "../../assets/Query.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button, Anchor } from "atomize";
import { Row, Col} from "react-bootstrap";
import wallIamge from "../../assets/square_mid_light.svg"

const App = () => {
  return (
    <div className="App" style = {{backgroundImage: `url(${wallIamge})`}}>
      <Navbar>
        <div
          className = {classes.home__navbar__brand}
        >
          <img
            src={logo}
            className = {classes.home__navbar__brand__logo}
            alt="astsdsad"
          />
          <span style={{ fontWeight: "800" }}>Query</span>
          lizer
        </div>
        <div
          style={{
            fontSize: "1.7rem",
            paddingTop: "10px",
            paddingRight: "30px"
          }}
          className="ml-auto"
        >
          <Nav>
            <Nav.Link href="#home" className = {classes.home__navbar__logo}>
              <i
                className= {"far fa-envelope " + classes.home__navbar__icons}
              ></i>
            </Nav.Link>
            <Nav.Link href="#features">
              <i
                className = {"fab fa-github " + classes.home__navbar__icons}
              ></i>
            </Nav.Link>
            <Nav.Link href="/visualizer">
              <i className= {"fas fa-sign-in-alt " + classes.home__navbar__icons}></i>
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
                <Anchor href="/visualizer">
                  <Button
                    shadow="3"
                    hoverShadow="4"
                    m={{ r: "1rem" }}
                    className = {classes.home_button}
                  >
                    LOGIN                    
                  </Button>
                </Anchor>
                <Anchor href="/visualizer">
                  <Button
                    shadow="3"
                    hoverShadow="4"
                    m={{ r: "1rem" }}
                    className = {classes.home_button}
                  >                   
                    GET STARTED                    
                  </Button>
                </Anchor>
                    
                <Anchor href="https://www.google.com" className = {classes.home_button_link}>                      
                  <Button
                    shadow="3"
                    hoverShadow="4"
                    m={{ r: "1rem" }}
                    className = {classes.home_button}
                    // onClick={addNewNode}
                  >ABOUT US
                  </Button>
                </Anchor>
              </Col>
        </Row>
        <br />
        <h2 className = {classes.home_h2_last_text}>
          Easily convert your Database Diagram to code. Hassle Free.
        </h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
     
    </div>
  );
}


export default App;