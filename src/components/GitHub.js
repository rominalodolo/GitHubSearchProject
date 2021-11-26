import React, { Component } from "react";
import axios from "axios"; 


class GitHub extends Component {
  constructor() {
    super();
    this.getGitHubData("greg");
  }

  getGitHubData(_searchTerm) {
    axios.get("https://api.github.com/search/users?q=" + _searchTerm)
      .then((res) => {
        console.log(res.data.items);
      });
  }
  render() {
    return <div></div>;
  }
}

export default GitHub;
