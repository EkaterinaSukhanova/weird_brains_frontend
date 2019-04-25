import React, { Component, Fragment } from 'react';

import Home from '../components/Home';

export default class HomeContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            articles: []
        };
    }

    load = () => {
        fetch(`http://92.53.78.204/api/post/get_all`)
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