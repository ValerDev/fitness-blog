import './App.scss';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/pages/Blog';

function App(props) {
  return (
    <div className="app">
      <Router>
        <Header state={props.state.header} />
        <Route exact path="/">
          <Home state={props.state.pages.home} />
        </Route>
        <Route exact path="/blog">
          <Blog state={props.state.pages.blog} />
        </Route>
        <Footer state={props.state.footer} />
      </Router>
    </div>
  )
}

export default App;
