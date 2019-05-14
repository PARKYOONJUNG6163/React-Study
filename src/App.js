import React, { Component } from 'react';
import Login from './Component/Login';
import './App.css';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }

  render(){
    return (
        <div className={"App-Login"}>
          <h1>로그인 하기</h1>
          <Login onCreate={this.handleCreate}/>
        </div>
    )
  }
}

export default App;
