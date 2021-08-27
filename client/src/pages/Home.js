import React from "react";
import Jumbotron from "../components/Jumbotron";

const style = {
  background: '#e0dee1',
  borderRadius: '.25em',
  padding: '.25em',
  boxShadow: '0px 10px 13px -7px #000000, 0px 0px 22px 20px rgba(255,255,255,0)',
  overflow: 'wrap',
  width: 'auto'
}

const Home = () => {
  return (
    <div className="containerNBG">
      <Jumbotron>
        <h1 style={style}>Good Enuff</h1>
        <br></br>
        <p style={style}>Taking the steps to becoming a better human on day at a time</p>
      </Jumbotron>
    </div>
  );
};

export default Home;
