import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

class ArticlePreview extends React.Component {

    static propTypes = {
        size: PropTypes.oneOf(['small', 'big']),
        nameImage: PropTypes.oneOf(['image1', 'image2', 'image3', 'image4'])
    };

    static defaultProps = {
        size: 'small',
        nameImage: 'image4',
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

        return (
            <div className={articleClasses}>
                <img src={nameImage} alt='image' className={imageClasses}/>
                <p>{description}</p>
            </div>
        );
    }
}

export default ArticlePreview;