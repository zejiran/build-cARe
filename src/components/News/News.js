import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    if (this.state.articles.length === 0) {
      const url = "https://covid19-us-api.herokuapp.com/news";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ articles: data.message });
    }
  }

  render() {
    this.componentDidMount();

    return (
      <div className="row mb-5">
        <div className="container mt-5 mb-5">
          <h1 className="mt-5 ml-4">News Feed</h1>
          <hr className="ml-4" />
          {this.state.articles.map((article) => (
            <div className="col mt-5 mb-5">
              <div className="card shadow border-3" id={article.id}>
                <div className="card-header">
                  <div className="row">
                    <div className="col-1">
                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                        <FontAwesomeIcon icon={faBell} />
                      </div>
                    </div>
                    <p className="mt-2">
                      by <strong>{article.title.split("-")[1].trim()}</strong>
                    </p>
                  </div>
                </div>
                <div class="card-body py-5">
                  <h5 class="card-title">
                    {article.title.split("-")[0].trim()}
                  </h5>
                  <a href={article.url} class="btn btn-primary">
                    View Article
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;
