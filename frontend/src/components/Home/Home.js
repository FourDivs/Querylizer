import Container from "react-bootstrap/Container";
import classes from "./Home.module.css";
import logo from "../../assets/Query.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const App = () => {
  return (
    <div className="App">
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
          <h1>
            Create Stunning 🚩 Blazing ⚡ Interactive{" "}
            <span className={classes.home_span_gradient}>
              Database Diagrams{" "}
            </span>
            🚀
          </h1>
        </div>
        <br />
        {/* <h2 style={{ fontSize: "2.0rem", fontWeight: "300" }}> */}
        <h2><span className = {classes.body_text}>
          Say Hi 👋 to the No Code Era
          </span>
        </h2>
        <br />
        <br />
        <br />
        <h2 style={{ fontSize: "2.0rem", fontWeight: "300" }}>
          Easily convert your Database Diagram to code. Hassle Free.
        </h2>
      </Container>
    </div>
  );
}


export default App;