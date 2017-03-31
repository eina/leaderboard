import React, { Component } from 'react';
import axios from 'axios';
//CSS
import { Table } from 'react-bootstrap';
import './App.css';
//Components
import UserList from './components/user-list'

const URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

// axios.get(URL)
//   .then(function (response) {
//     console.log(response.data);
//   })

class App extends Component {
  constructor(props){
    super(props);
    this.state = { user: [] };

    axios.get(URL)
      .then((response) =>{
        this.setState({ user: response.data });
      });
  }

  render() {
    return (
      <div className="App">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Camper</th>
              <th>Points in past 30 days <button className="btn">Sort</button></th>
              <th>All time points <button className="btn">Sort</button></th>
            </tr>            
          </thead>
          <caption><h1>freeCodeCamp Leaderboard</h1></caption>
          <UserList users={this.state.user}/>
        </Table>
      </div>
    );
  }
}

export default App;
