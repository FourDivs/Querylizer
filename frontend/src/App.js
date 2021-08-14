import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';

//firebase setup and initialzation
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './config/firebaseConfig';
firebase.initializeApp(firebaseConfig);

//lazy loading
const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./components/Home/Home')), 1000);
  });
});
const Visualizer = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./components/Visualizer/Visualizer')), 1000);
  });
});
const AboutUs = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./components/AboutUs/AboutUs')), 1000);
  });
});

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/visualizer" component={Visualizer} />
          <Route exact path="/aboutus" component={AboutUs} />
          {/* TODO: <Route exact path="*" component={PageNotFound} /> */}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
