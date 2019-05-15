import React from 'react';

const Post = ({match}) => {
    return (
       <div>
           {/*Link에서 현재 주소 뒤에 id를 붙여서 이동하도록 설정*/}
           포스트 {match.params.id}
       </div>
    );
};

export default Post;