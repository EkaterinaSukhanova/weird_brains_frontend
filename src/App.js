import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import withStyles from "@material-ui/core/es/styles/withStyles";

import './App.css';
import Header from './components/Header';

import routes from './routes';
import PropTypes from "prop-types";

const styles = {
};

class App extends Component {
  render() {

    const { classes } = this.props;
    return (
    <div className="App">
      <Header />
      <Switch>
          {routes.map((route, idx) => <Route key={idx} {...route} />)}
      </Switch>
    </div>
    );
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
