import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import withStyles from "@material-ui/core/es/styles/withStyles";

import './App.css';
import Header from './components/Header';

import routes from './routes';
import navigation from './navigation';
import PropTypes from "prop-types";

const styles = {
    navItemText: {
        display: 'none',
    },
    navItemImage: {

    },
    link: {
        textDecoration: 'none',
        margin: '0 25px',
        fontFamily: 'Amatic SC, cursive',
        width: '60px',
        '&:hover': {
            // opacity: 0.15,
            color: '#706761',

            '& $navItemText': {
                display: 'block',
                margin: 0,
            },
            '& $navItemImage': {
                display: 'none',
                margin: 0,
            },
        },

    }
};

class App extends Component {
  render() {

    const { classes } = this.props;
    return (
    <div className="App">
      <Header>
          {navigation.map((item, idx) =>
              <Link key={idx} to={item.link} className={classes.link}>
                  <img className={classes.navItemImage} src={item.logo} alt="Logo"/>
                  <span className={classes.navItemText}>{item.text}</span>
              </Link>)}
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
