import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            // 클릭 시 호출되는 이벤트 핸들러 등록
              <div>
                <button onClick={this.props.onDecrement}>PREV</button>
                <button onClick={this.props.onIncrement}>NEXT</button>
              </div>
        );
    }
}

export default Button;