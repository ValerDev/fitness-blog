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
import SingleBlog from './components/pages/SingleBlog';
import AboutUs from './components/pages/AboutUs';

const App = (props) => {

  return (
    <div className="app">
      <Router>
        <Header />
        <Route exact path="/">
          <Home interesting_facts = {props.state.singleBlogPage.blog_info} />
        </Route>
        <Route exact path="/blog">
          <Blog blog_info={props.state.singleBlogPage.blog_info} />
        </Route>
        <Route exact path={"/blog/:id"}>
          <SingleBlog state = {props.state.singleBlogPage} dispatch = {props.dispatch}/>
        </Route>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/contact-us">
          <ContactUs state={props.state.contactPage.contact_us} dispatch={props.dispatch} />
        </Route>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
