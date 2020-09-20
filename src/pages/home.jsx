import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
         <div>
            <h1>Welcome To my Blog !</h1>
            <div className="posts">
               <p> <Link to="/blog/post1"> Post1 </Link></p>
               <p> <Link to="/blog/post2">Post2 </Link> </p>
            </div>
         </div>
    );
};

export default Home;
