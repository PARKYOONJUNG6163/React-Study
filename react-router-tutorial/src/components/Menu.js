import React from 'react';
//  NavLink컴포넌트는 Link와 비슷하지만 설정한 URL활성 시 특정 스타일 혹은 클래스 지정가능
import { NavLink } from 'react-router-dom';
// Link컴포넌트는 페이지를 새로 불러오는 걸 막고 원하는 라우트로 화면 전환
// <a href> 형식 사용하면 새로고침 하므로 하면 안됨
// import { Link } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color : 'green',
        fontSize: '2rem'
    };

    return (
        <div>
            <ul>
                {/*<li><Link to="/">Home</Link></li>*/}
                {/*<li><Link to="/about">About</Link></li>*/}
                {/*<li><Link to="/about/foo">About Foo</Link></li>*/}
                {/*중첩될 수 있는 라우트들은 exact로 설정*/}
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
                <li><NavLink to ="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
            </ul>
            <hr/>
        </div>
    )
}

export default Menu;