import React, { Component } from 'react'
import NewsCard from './components/news-card/news-card'
import NewsReader from './components/news-reader/news-reader'

import NewsService from './services/news-service'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: [],
      selectedNews: null
    }

    this.onNewsClicked = this.onNewsClicked.bind(this)
  }

  onNewsClicked(news) {
    this.setState({
      selectedNews: news
    })
  }

  async componentDidMount() {
    const news = await NewsService.getNews()

    this.setState({
      news: news
    })
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>React news reader</h2>
          <small className="app-watermark">provided by <a href="http://newsapi.org" target="_blank">newsapi.org</a></small>
        </div>
        {this.state.news.length ?
          <div className="app-news-cards-container">
            {this.state.news.map((news, index) => {
              return <NewsCard key={index} news={news} onNewsClicked={this.onNewsClicked} />
            })}
          </div> :
          <img src={logo} className="app-logo" alt="logo" />}
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