import React, { Component } from "react";
import Boxes from "./Boxes";

export default class Fetcher extends Component {
  state = {
    articles: []
  };
  FetchDataFromRssFeed() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://positivelypositive.com/feed"
    )
      .then(response => response.json())
      .then(json => {
        //const articleArray = [];
        //json.forEach(el => {
        //articleArray.push(el);
        //});
        //this.state.articles.push(articleArray);
        this.setState({ articles: json["items"] });
        //.splice(0, 3)
        console.log(this.state.articles[0]["title"]);
        //let nestedArray = this.state.articles;
        //let nestedArray = this.state.articles.map(el => {});
        // console.log(nestedArray);
      });
  }

  componentDidMount() {
    {
      console.log("when does this gets executed");

      this.FetchDataFromRssFeed();
    }
  }

  render() {
    //console.log("render of fetcher", this.state);
    return (
      <div>
        {this.state.articles.map(article => (
          <Boxes
            title={article.title}
            author={article.author}
            src={article.thumbnail}
          />
        ))}
      </div>
    );
  }
}

// lala {this.state.articles["categories"]}    <img src={this.props.link} />
/* src={this.json["items"][0]}
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
