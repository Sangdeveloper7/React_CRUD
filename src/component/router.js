import React from 'react';
import { Link } from 'react-router-dom';


const Router = () => {
    return(
        <Router>
      <Routes>
        <><Route path="/" element={<Home />}>
    </Route><Route path="/hello" element={<Hello />}>
      </Route></>
      </Routes>
    </Router>
    );
};

export default Router;