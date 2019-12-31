import React, { Component } from 'react'

import './news-card.css'

class NewsCard extends Component {
    handleClick() {
        this.props.onNewsClicked(this.props.news)
    }

    render() {
        return (
            <div className="news-card" onClick={this.handleClick.bind(this)}>
                <span className="news-card-title">{this.props.news.title}</span>
            </div>
        )
    }
}

export default NewsCard
