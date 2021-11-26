import React, { Component } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { Modal, Form, FormGroup, FormControl, Button } from "react-bootstrap";

class GitHub extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchTerm: "",
      isLoading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    this.getGitHubData(this.state.searchTerm);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
    }

  componentDidMount() {
    // this.getGitHubData("greg");
  }

  getGitHubData(_searchTerm) {
    axios
      .get("https://api.github.com/search/users?q=" + _searchTerm)
      .then((res) => {
        this.setState({
          isLoading: false,
          data: res.data.items,
        });
        console.log(res.data.items);
      });
  }
  render() {
    const listUsers = this.state.data.map((user) => (
      <Modal key={user.id}>
        <Modal.Left>
          <a href={user.html_url}>
            <img width={64} height={64} src={user.avatar_url} alt="Portrait" />
          </a>
        </Modal.Left>
        <Modal.Body>
          <Modal.Heading>{user.login}</Modal.Heading>
          <p>Score: {user.score}</p>
        </Modal.Body>
      </Modal>
    ));
    return (
      <div>
        <Form inline onSubmit={this.handleSubmit}>
        <FormGroup controlId="formInlineName">
        <FormControl
          type="text"
          value={this.state.searchTerm}
          placeholder="Enter Search Term"
          onChange={this.handleChange}
        />
        </FormGroup>{' '}
          <Button type="submit">Search</Button>
        </Form>
        <h3>GitHub Users Results</h3>
        {this.state.isLoading && (
          <ReactLoading type="spinningBubbles" color="#444" />
        )}
        {listUsers}
      </div>
    );
  }
}

export default GitHub;
