import './App.scss';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import store from './redux/store';

function App(props) {
  return (
    <div className="app">
      <Router>
      <Header data = {props.state.header}/>
        <Route exact path="/">
          <Home data = {store.getState()}/>
        </Route>
      <Footer data = {props.state.footer}/>
      </Router>
    </div>
  )
}

export default App;
