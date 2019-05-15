import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Menu from 'components/Menu'
import { Home, About, Posts } from 'pages';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                {/* exact 가 붙어있으면 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트를 보여줌 */}
                <Route exact path="/" component={Home}/>
                {/* 매칭되는 첫번째 라우트만 보여줌, 비교할 라우트를 위에 작성해야 함 */}
                <Switch>
                    {/* url의 params를 설정할 때는 :foo 형식 */}
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/posts" component={Posts}/>
            </div>
        );
    }
}

export default App;