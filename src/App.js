import React, { Component } from 'react'
import NewsCard from './components/news-card/news-card'
import NewsReader from './components/news-reader/news-reader'

import logo from './logo.svg'
import './App.css'

const getNews = () => {
  return [{
    title: 'news1',
    content: 'news1 content'
  }, {
    title: 'news2',
    content: 'news2 content'
  }, {
    title: 'news3',
    content: 'news3 content'
  }, {
    title: 'news4',
    content: 'news4 content'
  }, {
    title: 'news5',
    content: 'news5 content'
  }, {
    title: 'news6',
    content: 'news6 content'
  }]
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: getNews(),
      selectedNews: null
    }

    this.onNewsClicked = this.onNewsClicked.bind(this)
  }

  onNewsClicked(news) {
    this.setState({
      selectedNews: news
    })
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>React news reader</h2>
        </div>
        <div className="app-news-cards-container">
          {this.state.news.map((news, index) => {
            return <NewsCard key={index} news={news} onNewsClicked={this.onNewsClicked} />
          })}
        </div>
        {this.state.selectedNews ?
          <div>
            <NewsReader selectedNews={this.state.selectedNews} />
          </div> :
          null}
      </div>
    )
  }
}

export default App