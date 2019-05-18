import React, { Component } from 'react';
import './App.css';

import Button from './components/Button';
import * as service from './services/posts';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
          id : 0,
          title : '',
        };
      }

      onIncrement = (event) => {
        this.fetchUserInfo(this.state.id + 1);
      }

      onDecrement = (event) => {
        this.fetchUserInfo(this.state.id - 1);
      }

      // 서버에 api 호출
      // Promise.all 메소드로 getTitle,getContent 실행
      // async는 비동기 작업하고 await는 비동기 작업인 Promise기다림
      fetchUserInfo = async (id) => {
        const Info = await Promise.all([
            service.getTitle(id),
            service.getContent(id)
        ]);
        // id와 서버에서 전달받은 title, content를 state에 저장
        this.setState(prevState => ({
              id : id,
              title : Info[0].data.title,
              content:Info[1].data.content
        }));
      }

      render() {
        return (
            <div>
              <h1>{this.state.title}</h1>
              <p>{this.state.content}</p>
              <Button onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
            </div>
        );
    }
}

export default App;
