import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import withStyles from "@material-ui/core/es/styles/withStyles";

import './App.css';
import Header from './components/Header';

import routes from './routes';
import navigation from './navigation';
import PropTypes from "prop-types";

import image from './static/icon48.png'

const styles = {
    link: {
        textDecoration: 'none',
        margin: '0 15px',
    }
};

class App extends Component {
  render() {

    const { classes } = this.props;
    return (
    <div className="App">
      <Header>
          {navigation.map((item, idx) => <Link key={idx} to={item.link} className={classes.link}><img src={image} alt="Logo" /></Link>)}
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
