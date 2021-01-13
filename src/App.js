import "./App.css";
import { Redirect, Switch, Route } from "react-router-dom";
import Admin from "./component/Admin";
import Login from "./component/Login";
import About from "./component/About";
import Content from "./component/Content";
import Shop from "./component/Shop";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/content" component={Content}></Route>
        <Route path="/shop" component={Shop}></Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
