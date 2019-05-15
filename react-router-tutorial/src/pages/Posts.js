import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from 'pages';

const Posts = ({match}) => {
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                {/*match.url은 현재의 라우트의 경로 */}
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
            </ul>
            {/*포스트의 id가 주어지지 않았을 때*/}
            <Route exact path={match.url} render={() => (<h3>Please select any post</h3>)}/>
            {/*현재 라우트 주소에 :id가 붙었을 시*/}
            <Route path={`${match.url}/:id`} component={Post} />
        </div>
    );
};

export default Posts;