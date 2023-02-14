import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <p>homepage</p>
      <Link to="/hello"><li>helloPage로 이동</li></Link> //화면 이동 태그
    </div>
  );
};

export default Home;