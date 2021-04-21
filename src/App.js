import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../src/assets/styles/styles.css";
import Category from './pages/category/Category';
import Items from './pages/items/Items';
import Member from './pages/Member';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
      <Switch>
        <Route path="/category" component={Category} />
      </Switch>
      <Switch>
        <Route path="/items" component={Items} />
      </Switch>
      <Switch>
        <Route path="/member" component={Member} />
      </Switch>
    </Router>
  );
}

export default App;
