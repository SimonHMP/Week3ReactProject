import React, { Component } from "react";
import Boxes from "./Boxes";
import "./boxes.css";

export default class Fetcher extends Component {
  state = {
    articles: [],
    images: [],
    urls: []
  };
  FetchDataFromRssFeed() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://positivelypositive.com/feed"
    )
      .then(response => response.json())
      .then(json => {
        //console.log(json["items"][0]["link"]);
        let links = [];
        json["items"].map(item => {
          links.push(item.link);
        });

        this.setState({ articles: json["items"].splice(1, 10), urls: links });
        //console.log(this.state.urls);
        //console.log(this.state.articles);
        //console.log(json['items']
      });
  }

  FetchImage() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgaryhartblog.com%2Ffeed%2F"
    )
      .then(response => response.json())
      .then(json => {
        let urls = json["items"];
        let newUrls = [];
        //console.log(urls);
        urls.map(link => newUrls.push(link["thumbnail"]));
        //console.log(newUrls);
        this.setState({ images: newUrls });

        //console.log(this.state.images);
      });
  }

  componentDidMount() {
    {
      //console.log("when does this gets executed");

      this.FetchDataFromRssFeed();
      this.FetchImage();
    }
  }
  clickForMessage = () => {
    console.log("hello");
  };

  //imageGetter = () => {};
  //this.setState({ images: images.sort() });
  //};

  render() {
    console.log("render of fetcher", this.props);
    //if props.test == true -> FetchImage() , call this.props.done

    return (
      <div>
        {this.state.articles.map((article, index) => (
          <Boxes
            title={article.title}
            author={article.author}
            src={this.state.images[index]}
            link={this.state.urls[index + 1]}
          />
        ))}
      </div>
    );
  }
}

// lala {this.state.articles["categories"]}    <img src={this.props.link} />
