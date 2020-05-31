import React, { Component } from "react";

import logo from "../../assets/img/logo_no_background.png";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div class="collapse navbar-collapse">
          <div className="container-fluid">
            <div className="col-2">
              <a className="navbar-brand" href="#">
                <img
                  src={logo}
                  width="30"
                  height="30"
                  class="d-inline-block align-top"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
