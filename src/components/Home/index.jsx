import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

import withStyles from "@material-ui/core/es/styles/withStyles";
import ArticlePreview from '../ArticlePreview';
import {Link} from "react-router-dom";
import image from "../../static/icon48.png";
import Header from "../Header";

import image1 from '../../static/IMG_0001.jpg';
import image2 from '../../static/IMG_0002.jpg';
import image3 from '../../static/IMG_0003.jpg';
import image4 from '../../static/IMG_0004.jpg';

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

let newArticle = {
    image: image1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis dolore minima voluptates.',
    text: '',
};

let articles = [
    {
        image: image2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, mollitia?',
        text: '',
    },
    {
        image: image3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, mollitia?',
        text: '',
    },
    {
        image: image4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, magni.',
        text: '',
    },
    {
        image: image2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolore incidunt iste.',
        text: '',
    },
    {
        image: image4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, mollitia?',
        text: '',
    },
    {
        image: image3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, dolorum, ullam?',
        text: '',
    },
    {
        image: image2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, exercitationem, temporibus?',
        text: '',
    },
];


class Home extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <h2>Home page</h2>
                <div className='all-articles'>
                    <div className='new-article'><ArticlePreview size='big' nameImage={newArticle.image} description={newArticle.description}/></div>
                    {articles.map((item, idx) => <ArticlePreview nameImage={item.image} description={item.description}/>)}
                </div>
            </div>
        );
    }
}


Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);