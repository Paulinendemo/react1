import React from "react"
import './App.css';
import './index.css'
import Header from "./components/Header"
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Pricing />
      <Contact />
      <Map />
      <Footer />
    </div>
  )
}

export default App;
