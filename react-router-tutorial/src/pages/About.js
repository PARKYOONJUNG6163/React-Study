// About 경로로 들어왔을 떄 보여줄 페이지
import React from 'react';
// url쿼리를 해석해서 객체로 만들어주는 기능
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    const detail = query.detail === 'true';

    console.log(query);

    return (
        <div>
            <h2>About { match.params.name } </h2>
            {detail && 'detail: blahblah'}
        </div>
    );
};

export default About;