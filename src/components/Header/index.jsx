import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import withStyles from '@material-ui/core/es/styles/withStyles';
import navigation from '../../navigation';
import {Link} from 'react-router-dom';
import mainLogo from '../../static/mainlogo.png';

const styles = {
    headContainer: {
        textAlign: 'center',
        marginTop: '20px',
    },
    mainLogo: {
        width: '400px',
    },
    menu: {
        paddingLeft: 0,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: '60px',
    },
    navItemText: {
        display: 'none',
        color: '#706761',
    },
    navItemImage: {
    },
    link: {
        textDecoration: 'none',
        margin: '0 15px',
        fontFamily: 'Noteworthy-Bold, cursive',
        width: '80px',
        '&:hover': {
            // opacity: 0.15,
            '& $navItemText': {
                display: 'block',
                marginTop: '20px',
            },
            '& $navItemImage': {
                display: 'none',
                margin: 0,
            },
        },
        '&:focus': {
            '& $navItemText': {
                display: 'block',
                marginTop: '20px',
            },
            '& $navItemImage': {
                display: 'none',
                margin: 0,
            },
        }
    }
};

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <header>
                <div className={classes.headContainer}>
                    <Link to={'/'}>
                        <img className={classes.mainLogo} src={mainLogo} alt="Weird Brains"/>
                    </Link>
                </div>
                <div className={classes.menu}>
                    {navigation.map((item, idx) =>
                        <Link key={idx} to={item.link} className={classes.link}>
                            <img className={classes.navItemImage} src={item.logo} alt="Logo"/>
                            <span className={classes.navItemText}>{item.text}</span>
                        </Link>)}
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);