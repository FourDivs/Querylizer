import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Visualizer from "./components/Visualizer/Visualizer"
import Home from "./components/Home/Home"
import { UserContext } from "./context/UserContext";


//firebase setup and initialzation
import firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from "./config/firebaseConfig";
firebase.initializeApp(firebaseConfig);


const App = () => {

  const [user, setUser] = useState(null);

  return (
    <Router>
      <UserContext.Provider value = {{user, setUser}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/visualizer" component={Visualizer} />
          {/* TODO: <Route exact path="*" component={PageNotFound} /> */}
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
