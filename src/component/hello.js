import React from 'react';
import { Link } from 'react-router-dom';

const Hello = () => {
  return (
    <div>
      <h1>hello</h1>
      <p>hello page</p>
      <Link to="/"><li>homepage로 이동</li></Link> //화면 이동 태그
    </div>
  );
};

export default Hello;