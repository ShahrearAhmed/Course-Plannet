import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Course from './component/Course/Course';
import Footer from './component/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './component/Home/About/About';
import Service from './component/Servicess/Service';
import Contact from './component/Servicess/Contact/Contact';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      {/* <Header>

      </Header> */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home>
            </Home>
          </Route>
          {/* <Route exact path="/">
            <Course></Course>
          </Route> */}
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Service>
            </Service>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route >
        </Switch>
        <Footer></Footer>
      </Router>
    </div >
  );
}

export default App;
