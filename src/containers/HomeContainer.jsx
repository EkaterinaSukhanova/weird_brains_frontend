import React, { Component, Fragment } from 'react';

import Home from '../components/Home';

export default class ContentContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            articles: []
        };
    }

    load = () => {
        fetch(`http://82.202.204.246/api/post/get_all`)
            .then((response) => response.json())
            .then((allArticles) =>{
                console.log('ok');
                this.setState((prevState) => ({
                    articles: prevState.articles.concat(allArticles),
                }));
            });
    };

    componentDidMount() {
        this.load();
    }

    render() {
        const { articles } = this.state;

        return (
            <Fragment>
                <Home articles={articles} />
            </Fragment>
        )
    }

}