import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import withStyles from "@material-ui/core/es/styles/withStyles";
import ArticlePreview from '../ArticlePreview';
import navigation from "../../navigation";
import {Link} from "react-router-dom";
import image from "../../static/icon48.png";
import Header from "../Header";

const styles = {

};


class Home extends React.Component {
    render() {
        let arrayAryicles = [];

        return (
            <div>
                <h2>Home page</h2>
                {[1, 2, 3,4].map((item, idx) => <ArticlePreview />)}
            </div>
        );
    }
}


Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);