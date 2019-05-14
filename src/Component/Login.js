import React, { Component } from 'react';

class Login extends Component {
    state = {
        id : '',
        pw : ''
    }

    handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            id: '',
            pw: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder={"id를 입력하세요"} value = {this.state.id} onChange={this.handleChange} name="id"/>
                <input placeholder={"pw를 입력하세요"} value = {this.state.pw} onChange={this.handleChange} name="pw"/>
                <button type="submit">로그인 하기</button>
            </form>
        );
    }
}

export default Login;