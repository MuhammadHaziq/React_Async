import React, { Component } from "react";
import { connect } from "react-redux";
import { getSpecificUser } from "./action/Actions.js";
import { Table } from "react-bootstrap";

class specificUser extends Component {
  componentDidMount() {
    console.log(this.props.match.url);
    this.props.getSpecificUser(this.props.match.url);
  }
  componentWillReceiveProps() {}
  render() {
    console.log("User are : ", this.props);
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
            {
              <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.login} </td>
                <td>{this.props.data.avatar_url}</td>
              </tr>
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    users: state.users,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getSpecificUser }
)(specificUser);
