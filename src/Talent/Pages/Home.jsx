import React from 'react';
import Hero from "../Components/hero"
import NewestMatches from "../Components/newestmatches"
import NewMatches from "../Components/newmatches"
import Posts from "../Components/posts"

const Home = () => {
  return (
    <div>
     <Hero/>
     <NewMatches/>
     <NewestMatches/>
     <Posts/>
    </div>
  );
};

export default Home;