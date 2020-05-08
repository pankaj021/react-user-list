import React, {PureComponent} from 'react';
import axios from 'axios';
import './App.css';
import Form from './form/Form';
import Userlist from './user-list/Userlist';
import Header from './header/Header';

class App extends PureComponent {

  constructor(props) {
    super();
    console.log("app constructor called....");
    this.state = {
      userlist: []
    }
  }

  loadUserlist = () => {
    console.log("loadUserlist called....");
    axios
      .get('http://localhost:3001/users/')
      .then((response) => {
        console.log(" loadUserlist response>>>>>>>>>>>", response.data);
        this.setState({userlist: response.data})
      })
      .catch(error => {
        console.log("loadUserlist error>>>>>>>>>>>", error);
      })
  }

  pushIntoUserlist = (newUser) => {
    console.log("pushIntoUserlist called....");
    this.setState({
      userlist: [
        ...this.state.userlist,
        newUser
      ]
    })
  }

  componentDidMount() {
    console.log("componentDidMount called....");
    this.loadUserlist();
  }

  render() {
    return (
      <div>
        <Header/>
        <Form
          loadUserlist={this.loadUserlist}
          pushIntoUserlist={this.pushIntoUserlist}/>
        <Userlist userlist={this.state.userlist}/>
      </div>
    );
  }
}

export default App;
