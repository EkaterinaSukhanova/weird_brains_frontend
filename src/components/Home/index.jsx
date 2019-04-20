import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css'

import withStyles from "@material-ui/core/es/styles/withStyles";
import ArticlePreview from '../ArticlePreview';
import navigation from "../../navigation";
import {Link} from "react-router-dom";
import image from "../../static/icon48.png";
import Header from "../Header";

const styles = {
    mainArticles: {
        display: 'grid',
        gridTemplateColumns: '33% 33% auto',
        // gridTemplateRows: '300px 300px 300px 100px 100px 100px',
    },
    allArticles: {
        display: 'grid',
    },
    newArticle: {
        gridColumn: 1 / 3,
        // gridColumnEnd: 3,
        gridRow: 1 / 3,
        // gridRowEnd: 4,
    }
};

class Home extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <h2>Home page</h2>
                <div className='wrapper'>
                    <div className='a'><ArticlePreview/></div>
                    {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => <div><ArticlePreview/></div>)}
                </div>
                {/*<div className={classes.allArticles}>*/}
                    {/*{[1, 2, 3].map((item, idx) => <ArticlePreview />)}*/}
                {/*</div>*/}
            </div>
        );
    }
}


Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);