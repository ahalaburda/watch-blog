import React, { Component } from 'react'
import axios from 'axios'
import Entry from '../../components/Entry'

/**
 * Local component get all the record from the local database and list the response from the API.
 */

class Local extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  /**
   * GET: get the record from the local API and update the state with the response
   */
  getNews() {
     axios.get('http://localhost:3000/api/v1/posts.json')
        .then(response => {
          const reversed = response.data.data.reverse();
          this.setState({articles: reversed});
        })
        .catch(error => console.log(error))
  }

  componentDidMount(){
   this.getNews();
  }

  render() {
    return (
      <div>
        <h2>Local News.</h2>
        <div>
          {this.state.articles.map( article  => {
            return (
              <Entry key={article.attributes.title}
                  date={article.attributes.created_at}
                  author={article.attributes.author}
                  url="#"
                  tag="local"
                  title={article.attributes.title}
                  description={article.attributes.description}
                  image={article.attributes.image_url}/>
            )}
          )}
        </div>
      </div>
    )
  }
}

export default Local
