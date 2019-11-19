import React, { Component } from "react";

export default class Fetcher extends Component {
  state = {
    recentBlogPost: {
      title: "",
      link: ""
    }
  };

  FetchDataFromRssFeed() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://positivelypositive.com/feed "
    )
      .then(response => response.json())
      .then(json => {
        console.log(json["items"][0]);

        /*this.setState({recentBlogPost['title']: json['items']['title'],
          recentBlogPost['link'] : json['items']['link']
        })*/
        //console.log(json);
      });
  }

  componentDidMount() {
    {
      this.FetchDataFromRssFeed();
    }
  }

  render() {
    return (
      <div>
        Check out our blog:{" "}
        <a target="_blank" href={this.state.recentBlogPost.url}>
          {this.state.recentBlogPost.name}
        </a>
      </div>
    );
  }
}
// lala
/*
export default class Fetcher extends Component {
  componentDidMount() {
    const api_key = "58d084913ad74f8a82035282483e24d3";

    return fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);

        const goodNews = data.articles.filter(element => {
          if (element.content === null) return false;

          return element.content.toLowerCase().includes("good");
        });

        console.log(goodNews);
      });
  }

  render() {
    return null;
  }
}

//58d084913ad74f8a82035282483e24d3
*/
