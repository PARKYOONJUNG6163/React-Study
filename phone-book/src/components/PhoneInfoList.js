import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        list : [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined'),
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        // 다음 data가 현재 data랑 다른 배열이면 true
        return nextProps.data !== this.props.data;
    }

    render() {
        console.log('render PhoneInfoList');
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            info => (
              <PhoneInfo
                key={info.id} 
                info={info}
                onRemove={onRemove}
                onUpdate={onUpdate}
              />)
        );

    return (
        <div>
            {list}
        </div>
    );
 }
}

export default PhoneInfoList;