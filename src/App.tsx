import React from 'react';
import './App.scss';
import './fonts/fonts.scss';
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
    </div>
  );
}

export default App;
