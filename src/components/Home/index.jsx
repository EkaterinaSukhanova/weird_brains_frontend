import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

import withStyles from "@material-ui/core/es/styles/withStyles";
import ArticlePreview from '../ArticlePreview';
import {Link} from "react-router-dom";

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
        const { articles } = this.props;

        return (
            <div>
                <h2>Home page</h2>
                <div className='all-articles'>
                    {articles.map((item, idx) => {
                        if (idx === 0) {
                            return <div className='new-article' key={item.id}><ArticlePreview size='big' nameImage={item.main_img} description={item.title}/></div>
                        }
                        return <div key={item.id}><ArticlePreview nameImage={item.main_img} description={item.title}/></div>
                    })
                    }
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);