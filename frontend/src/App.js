import { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Loader from "./components/Loader/Loader";

//firebase setup and initialzation
import firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from "./config/firebaseConfig";
firebase.initializeApp(firebaseConfig);


//lazy loading
const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/Home/Home")), 1500);
  });
});
const Visualizer = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/Visualizer/Visualizer')), 1500);
  });
});
const  AboutUs = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./components/AboutUs/AboutUs")), 1500);
  });
});


const App = () => {

  const [user, setUser] = useState(null);

  return (
    <Router>
      <UserContext.Provider value = {{user, setUser}}>
        <Suspense fallback={<Loader/>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/visualizer" component={Visualizer} />
            <Route exact path="/aboutus" component={AboutUs} /> 
            {/* TODO: <Route exact path="*" component={PageNotFound} /> */}
          </Switch>
        </Suspense>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
