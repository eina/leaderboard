import React, { Component } from 'react';
import axios from 'axios';
//CSS
import { Table } from 'react-bootstrap';
import './App.css';
//Components
import UserList from './components/user-list'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      user: [],
      category: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
    };

    this.show30Days = this.show30Days.bind(this);
    this.showAllTime = this.showAllTime.bind(this);
  }

  componentDidMount(){
    axios.get(this.state.category)
      .then((response) =>{
        this.setState({ user: response.data });
      });   
  }

  show30Days(){
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then((response) =>{
        this.setState({ 
          user: response.data,
          category: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'   
        });
      });   
  }

  showAllTime(){
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then((response) =>{
        this.setState({ 
          user: response.data,
          category: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'   
        });
      });   
  }

  render() {
    return (
      <div className="App">
        <Table responsive striped bordered hover>
          <caption>
            <h1>freeCodeCamp Leaderboard</h1>
            <p>
              <button onClick={this.show30Days}>
                Most Points in 30 Days</button>
              <button onClick={this.showAllTime}>Most Points of All Time</button>
            </p>            
          </caption>
          <thead>            
            <tr>
              <th>#</th>
              <th>Camper</th>
              <th>Points in past 30 days</th>
              <th>All time points </th>
            </tr>            
          </thead>          
          {/*<UserList users={this.getData(this.state.category)}/>*/}
          <UserList users={this.state.user}/>
        </Table>
      </div>
    );
  }
}

export default App;
