// Root컴포넌트는 우리의 웹어플레이션에 BrowserRouter를 적용
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import App from 'shared/App';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;