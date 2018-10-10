import React , {Component} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users:[],
      Loading: true,
      error: null
    }
  };
  componentDidMount(){
    axios.get('https://api.github.com/users')
      .then((response) => {
          console.log(response);
          this.setState({
                users: response.data,
                Loading:false
          });
    })
    .catch((error) => {
          console.log("error is : ", error);
          this.setState({ Loading: true });
      });
    }


  render(){
    const { users,Loading , error} = this.state;
    if (this.state.error) {
      return (<div>{this.state.error}</div>)
    }if(this.state.Loading){
      return ("Loading");
    }

      console.log(this.state.users);

    return(
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
                             this.state.users.map(({ id, login, avatar_url }) =>
                            <tr key={id}>
                            <td><Link to={`/${login}`}>{id}</Link></td>
                                <td>{login} </td>
                                <td>{avatar_url}</td>
                            </tr>)
                         }
                   </tbody>
        </Table>
      </div>
    );

  }


}
export default App;
