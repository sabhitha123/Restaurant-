
import Order from './FirstPage.js/Order';
import Home from './FirstPage.js/Home';
import Promo from './FirstPage.js/Promo';
import OurMenu from './FirstPage.js/OurMenu';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
     <Route exact path="/" component={Nav}/>
     <Route path="/Home" component={Home}/>
     <Route path="/OurMenu" component={OurMenu}/>
     <Route path="/Promo" component={Promo}/>
     <Route path="/Order" component={Order}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
