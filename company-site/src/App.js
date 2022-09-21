import React from "react"
import './App.css';
import Header from "./components/Header"
import About from "./components/About";
import Map from "./components/Map";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Map />
      <Footer />
    </div>
  )
}

export default App;
