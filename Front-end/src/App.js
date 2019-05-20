import React from 'react';
import './App.css';
import Header from "./components/header/header" 
import IndexPage from './components/index-page';
// import IndexButton from './components/Index-button';
import ButtonIndex from './components/Index-button/button';
// import RiderSignup from './components/rider-signup/r-signup'

function App() {
  return (
    <div className="App">
      
      <Header />
      <IndexPage />
      <ButtonIndex />
      {/* <RiderSignup /> */}
      

    </div>
  );
}

export default App;
