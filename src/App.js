import React, { Component } from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {this.props.location.pathname == "/" ? null : <Nav />}
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default withRouter(App);
