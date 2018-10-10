import React, { Component } from "react";
import { Table, ListGroup, ListGroupItem } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get("https://api.github.com/users");
      const data = await response.data;
      console.log(data);
      this.setState({
        users: data,
        isLoading: false
      });
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: true,
        error: error
      });
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  componentWillMount() {
    this.setState({
      users: []
    });
    console.log("user");
  }

  render() {
    const { users, isLoading, error, errorinfo } = this.state;
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    }
    if (this.state.isLoading) {
      return "Loading";
    }

    console.log(this.props);
    console.log(this.state.users.login);
    return (
      <div className="conatiner">
        <Table bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Login Name</th>
              <th>Type</th>
            </tr>
          </thead>

          {this.state.users.map(({ id, login, avatar_url }) => (
            <tr key={id}>
              {" "}
              <td>{id}</td> <td>{login} </td> <td>{avatar_url}</td>{" "}
            </tr>
          ))}
        </Table>
      </div>
    );
  }
}

export default Api;
