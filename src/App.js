import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import withStyles from "@material-ui/core/es/styles/withStyles";

import './App.css';
import Header from './components/Header';

import routes from './routes';
import navigation from './navigation';
import PropTypes from "prop-types";

const styles = {
    link: {
        width: '100%',
        height: '100%',
        textDecoration: 'none',
    }
};

class App extends Component {
  render() {

    const { classes } = this.props;
    return (
    <div className="App">
      <Header>
          {navigation.map((item, idx) => <Link key={idx} to={item.link} className={classes.link}>{item.text}</Link>)}
      </Header>
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
