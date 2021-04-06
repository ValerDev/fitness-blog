import './App.scss';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/pages/Blog';
import ContactUs from './components/pages/ContactUs';

const App = (props) => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/contact-us">
          <ContactUs state={props.state.pages.contactUs} dispatch={props.dispatch} />
        </Route>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
