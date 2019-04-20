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
        paddingLeft: 0,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: '120px',
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
                    {children}
                    {/*{children.map((link, idx) => link)}*/}
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);