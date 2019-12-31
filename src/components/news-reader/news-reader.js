import React, { Component } from 'react'

import './news-reader.css'

class NewsReader extends Component {
    render() {
        return (
            <div className="news-reader">
                <p className="news-reader-title">{this.props.selectedNews.title}</p>
                
                <p className="news-reader-content">{this.props.selectedNews.content}</p>

                <p><a className="news-reader-url" href={this.props.selectedNews.url} target="_blank">Read full story here</a></p>

                <img src={this.props.selectedNews.image} className="news-reader-image" alt="news-art"></img>
            </div>
        )
    }
}

export default NewsReader
