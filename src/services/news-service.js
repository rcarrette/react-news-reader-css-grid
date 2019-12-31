import config from '../config'

class NewsService {
    async getNews() {
        const apiKey = config.NEWS_API_KEY

        const newsResponse = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}&pageSize=9`)

        const news = await newsResponse.json()

        console.log(news)

        return news.articles.map(n => {
            return {
                title: n.title,
                content: n.content,
                image: n.urlToImage,
                url: n.url
            }
        })
    }
}

export default new NewsService()