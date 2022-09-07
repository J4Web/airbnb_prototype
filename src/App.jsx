import { useState } from 'react'
import './App.css'
import Home from './assets/Home'
import Header from './assets/Header'
function App() {
  

  return (
    //BEM
    <div className="app">
      <Header/>
      {/* <h1>Hey here is what is working</h1> */}
     <Home/>
      {/* {home}{
        <Banner/>
          {Search}
        <Cards/>
        <Footer/>
      {SearchPage}
      } */}
    </div>
  )
}

export default App
