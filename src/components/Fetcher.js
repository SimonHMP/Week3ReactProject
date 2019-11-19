import React, { Component } from "react";
import Boxes from "./Boxes";

export default class Fetcher extends Component {
  FetchDataFromRssFeed() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://positivelypositive.com/feed"
    )
      .then(response => response.json())
      .then(json => {
        console.log(json["items"][0]["link"]);

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
        <Boxes link={"json['items][0]['link']"} />
      </div>
    );
  }
}

// lala
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
