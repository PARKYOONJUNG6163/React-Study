import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        // summit 버튼 누르면 페이지 새로고침이 되는데
        // 그러면 유저 인터랙션 다 놓치므로 이벤트 방지
        e.preventDefault();
        this.props.onCreate(this.state); // 상태 값 onCreate로 부모에게 전달
        this.setState({ // 상태 초기화
            name : '',
            phone: ''
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name = "name"
                />
                <input
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name = "phone"
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;
