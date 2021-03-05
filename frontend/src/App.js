import { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";

//firebase setup and initialzation
import firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from "./config/firebaseConfig";
firebase.initializeApp(firebaseConfig);


//lazy loading
const Home = lazy(() => import("./components/Home/Home"));
const Visualizer = lazy(() => import('./components/Visualizer/Visualizer'));


const App = () => {

  const [user, setUser] = useState(null);

  return (
    <Router>
      <UserContext.Provider value = {{user, setUser}}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/visualizer" component={Visualizer} />
            {/* TODO: <Route exact path="/aboutus" component={AboutUs} /> */}
            {/* TODO: <Route exact path="*" component={PageNotFound} /> */}
          </Switch>
        </Suspense>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
