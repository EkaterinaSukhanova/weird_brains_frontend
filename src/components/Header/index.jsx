import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = {
    headContainer: {
        display: 'flex',
        color: 'red',
        justifyContent: 'center',
    }

};

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <header className={classes.headContainer}>
                <h1>The Blog</h1>
                <p>Example template of creating blog</p>

                {/*<ul className="navigation">*/}
                    {/*{children.map((link, idx) => <li key={idx}>{link}</li>)}*/}
                {/*</ul>*/}
            </header>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);