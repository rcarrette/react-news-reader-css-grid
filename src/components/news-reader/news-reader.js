import React, { Component } from 'react'

import './news-reader.css'

class NewsReader extends Component {
    render() {
        return (
            <div className="news-reader">
                <p className="news-title">{this.props.selectedNews.title}</p>
                
                <p className="news-content">{this.props.selectedNews.content}</p>
            </div>
        )
    }
}

export default NewsReader
