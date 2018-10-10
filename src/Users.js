import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

class Users extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: {},
      Loading: true,
      error: null
    };
  }

  componentDidMount() {
  const { user } = this.props.match.params;
  console.log(user);
  axios.get('https://api.github.com/users/'+user+'')
  .then((response) => {
    console.log("response is  : ", response);
    if (response.status === 200) {
      this.setState({
        users: response.data,
        isLoading: false,
      });
      console.log("User data :",response.data);
    }
  })
  .catch((error) => {
    console.log("error is : ", error);
    this.setState({ isLoading: true });
  });
}
  render(){

    const { users, isLoading,error } = this.state;
    if (this.state.error) {
      return (<div>{this.state.error}</div>)
    }if(this.state.isLoading){
      return ("Loading");
    }
    console.log(this.state.users.id);
console.log(this.props);
console.log(this.props.match.params);
const { user } = this.state;
console.log(user);
    return (
      <div>
          <Table bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Login Name</th>
                  <th>avatar_url</th>
                </tr>
              </thead>
              <tbody>
                    <tr key={this.state.users.id}>
                       <td> {this.state.users.id} </td>
                       <td>{this.state.users.login} </td>
                       <td>{this.state.users.avatar_url}</td>
                    </tr>
              </tbody>
        </Table>
    </div>

    );

  }

}

export default Users;
