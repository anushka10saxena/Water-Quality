import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route, Link } from "react-router-dom";
import Home from './components/Home/home';
// using CommonJS modules
import Ph from './components/ph/ph';
import Bod from './components/bod/ph';
import Cod from './components/cod/ph';
import Cond from './components/cond/ph';
import Do from './components/do/ph';
import Td from './components/TD/ph';
import Temp from './components/temp/ph';

function App() {
  return (
    <div className="App">
  <Router>
      <Link to="/">
   <button class='btn btn-secondary pull-right'>
       go to dashboard
          </button>
          </Link>
  
       <Route component={Home} exact path="/"/>
       <Route component={Ph} exact path="/ph"/>
       <Route component={Bod} exact path="/bod"/>
       <Route component={Cod} exact path="/cod"/>
       <Route component={Cond} exact path="/cond"/>
       <Route component={Do} exact path="/do"/>
       <Route component={Td} exact path="/td"/>
       <Route component={Temp} exact path="/temp"/>
       

  </Router>
  </div>
 
  );
}

export default App;
