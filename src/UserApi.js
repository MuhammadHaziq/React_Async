import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, getSpecificUser } from "./action/Actions.js";
import { Table } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UserApi extends Component {
  componentDidMount() {
    //console.log(this.props.user);
    this.props.getUsers();
  }

  render() {
    console.log("User are : ", this.props);
    if (this.props.isLoading === "true") {
      return "Loading";
    }
    return (
      <div className="container">
        <Table bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Login Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(({ id, login, avatar_url }) => (
              <tr key={id}>
                <td>
                  <Link to={`/${login}`}>{id}</Link>
                </td>
                <td>{login} </td>
                <td>{avatar_url}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(UserApi);

// {
// this.props.users.map(({ id, login, avatar_url }) =>
//   <tr key={id}>
//   <td><Router><Link to={`/${login}`}>{id}</Link></Router></td>
//       <td>{login} </td>
//       <td>{avatar_url}</td>
//   </tr>)
