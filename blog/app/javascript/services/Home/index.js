import React, { Component } from 'react'
import axios from 'axios'
import Entry from '../../components/Entry'

/**
 * Home component get all the news from Hodinkee of NewsAPI and render with a Infinite Scroll method
 */

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles:[],
      isLoading: true,
      errors: null,
      page: 1,
      maxPerPage: 5
    }
  }

  /**
   * Get the heigt of the page and check if the scrollbar if at the botton, for set a new pagesize limit and render the news from NewsAPI
   */
  infiniteScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
      let maxPerPage = this.state.page;
      maxPerPage = maxPerPage + 5;
      this.setState({
        page: maxPerPage
      });
      this.getNews(maxPerPage);
    }
  }
  /**
   * Get the news from Hodinkee,and update the state value with the response.
   */
  getNews(maxPerPage) {
    axios.get(
          `http://newsapi.org/v2/everything?domains=hodinkee.com&page=1&pageSize=${maxPerPage}&apiKey=e6fb7a2615694582bd66f2415bc8ec8f`
      )
          .then(response =>
            response.data.articles.map(article => ({
              id: `${article.id}`,
              date: `${article.publishedAt}`,
              author: `${article.author}`,
              url: `${article.url}`,
              title: `${article.title}`,
              description: `${article.description}`,
              image: `${article.urlToImage}`
            }))
          )
          .then(articles => {
            this.setState({
              articles,
              isLoading: false
            });
          })
          .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.infiniteScroll);
    this.getNews(this.state.maxPerPage);
  }

  render() {
    const { isLoading, articles } = this.state;
    return (
      <React.Fragment>
        <h2>Hodinkee News.</h2>
        <div>
          {!isLoading ? (
            articles.map(article => {
              const { id, date, author, url, title, description, image } = article;
              return (
                  <Entry key={article.url}
                        date={article.date}
                        author={article.author}
                        url={article.url}
                        tag = "Hodinkee"
                        title={article.title}
                        description={article.description}
                        image={article.image}
                        button_message="Go to the news" />
             );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
