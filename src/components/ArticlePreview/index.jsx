import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

class ArticlePreview extends React.Component {

    static propTypes = {
        size: PropTypes.oneOf(['small', 'big']),
    };

    static defaultProps = {
        size: 'small',
    };

    render() {
        const { size, nameImage, description} = this.props;

        const imageClasses = classNames('image', {
            'image-small': size === 'small',
            'image-big': size === 'big',
        });

        const articleClasses = classNames('article', {
            'article-small': size === 'small',
            'article-big': size === 'big',
        });

        const url = 'http://92.53.78.204' + nameImage;
        return (
            <div className={articleClasses}>
                <img src={url} alt='image' className={imageClasses}/>
                <p>{description}</p>
            </div>
        );
    }
}

export default ArticlePreview;