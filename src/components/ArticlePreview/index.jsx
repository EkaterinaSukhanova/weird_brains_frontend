import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import withStyles from "@material-ui/core/es/styles/withStyles";

import image from '../../static/123.jpg';

const styles = {

};

class ArticlePreview extends React.Component {
    render() {
        const { classes, children } = this.props;
        return (
            <div>
                <img src={image} alt='image' height='200px'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, illo!</p>
            </div>
        );
    }
}

ArticlePreview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArticlePreview);