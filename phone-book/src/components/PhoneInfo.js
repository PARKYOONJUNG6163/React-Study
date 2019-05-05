import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info : {
            name : '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    state = {
        editing: false, // 수정 버튼 클릭 여부 체크
        name: '', 
        phone: '', // input값을 담기 위한 name과 phone 변수
    }

    handleRemove = () => {
        // 삭제 버튼 클릭시 onRemove에 id넣고 호출
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        // editing값 반전
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }

    handleChange = (e) => {
        // input에서 onChange이벤트 발생 시
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // editing 값 변경시 처리
        // 수정 눌렀을 땐 기존의 값이 input에
        // 수정 적용할 땐 input 값들을 부모한테 전달
        const { info, onUpdate } = this.props;
        if(!prevState.editing && this.state.editing){
            // editing 값이 false >> true
            this.setState({ // info의 값을 state에 넣어줌
                name: info.name,
                phone: info.phone
            })
        }

        if(prevState.editing && !this.state.editing){
            // editing 값이 true >> false
            onUpdate(info.id, {
                name : this.state.name,
                phone : this.state.phone
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 수정 상태아니고 info값이 같다면 리렌더링 안함
        if(!this.state.editing && !nextState.editing && nextProps.info === this.props.info){
            return false;
        }
        return true; // 리렌더링
    }

    render() {
        console.log('render PhoneInfo ' + this.props.info.id);
        const style = {
            border : '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        if(editing) { // 수정시
            return (
                <div style={style}>
                <div>
                    <input
                        value={this.state.name}
                        name="name"
                        placeholder="이름"
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input
                        value={this.state.phone}
                        name="phone"
                        placeholder="전화번호"
                        onChange={this.handleChange}
                    />
                </div>
                <button onClick={this.handleToggleEdit}>적용</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div> 
            );
        }

        // 일반
        const {
            name, phone
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;