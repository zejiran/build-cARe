import React, { Component } from "react";

// reactstrap components
import { UncontrolledTooltip } from "reactstrap";

// react-fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faRssSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-bottom navbar-dark bg-primary">
        <div class="collapse navbar-collapse">
          <div className="container-fluid">
            <div className="row justify-content-md-center">
              <div className="col-4 col-md-auto">
                <ul class="navbar-nav mr-auto">
                  <li>
                    <a className="nav-link mr-5 ml-5" id="home" href="/">
                      <FontAwesomeIcon icon={faHome} size="3x" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Home
                      </span>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="home"
                      >
                        Home
                      </UncontrolledTooltip>
                    </a>
                  </li>
                  <li>
                    <a className="nav-link mr-5 ml-5" id="news" href="/news">
                      <FontAwesomeIcon icon={faRssSquare} size="3x" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        News
                      </span>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="news"
                      >
                        COVID-19 News
                      </UncontrolledTooltip>
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-link mr-5 ml-5"
                      id="github"
                      href="https://github.com/gripep/cARe"
                    >
                      <FontAwesomeIcon icon={faGithub} size="3x" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        GitHub
                      </span>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="github"
                      >
                        Check out our repo!
                      </UncontrolledTooltip>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
