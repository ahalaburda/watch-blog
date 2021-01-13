import React, { Component } from 'react'
import axios from 'axios'
import Entry from '../../components/Entry'

class Local extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  getNews() {
     axios.get('http://localhost:3000/api/v1/posts.json')
        .then(response => {
          this.setState({articles: response.data.data});
          console.log(typeof this.state.articles);
          console.log(this.state.articles);

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
