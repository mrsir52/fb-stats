import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "../components/Landing";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
import Navbar from "../components/Navbar";
// import Alert from "./components/Alert";
import Test from './testing/TestComponent'

//Redux
import { Provider } from 'react-redux'
import { configureStore } from "./store/configureStore";
// import store from './store'

const store = configureStore();
console.log(store.getState());


export class Routing extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path='/Test' component={Test} />
          <section className="container">
          {/* <Alert /> */}
            <Switch>
              {/* <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} /> */}
            </Switch>
          </section>
        </Fragment>
      </Router>
      </Provider>
    );
  }
}

export default Routing;
