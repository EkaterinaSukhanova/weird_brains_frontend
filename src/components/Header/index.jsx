import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = {
    headContainer: {
        // display: 'flex',
        color: 'red',
        // justifyContent: 'center',
        textAlign: 'center',
    },
    menu: {
        listStyleType: 'none',
        paddingLeft: 0,
        textAlign: 'center',
    },
    navItems: {
        "& li": {
            display: 'inline',
            marginRight: 10,
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '10px 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
    },
};

class Header extends React.Component {
    render() {
        const { classes, children } = this.props;
        return (
            <header>
                <div className={classes.headContainer}>
                    <h1>Weird Brains</h1>
                    <p>О мозгах и извилинах</p>
                </div>
                <div className={classes.menu}>
                    <ul className={classes.navItems}>
                        {children.map((link, idx) => <li key={idx}>{link}</li>)}
                    </ul>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);