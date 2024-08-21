import Navbar from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/components/pages/Navbar.jsx"
import Home from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/components/pages/Home.jsx"
import Image from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/images/home.webp" 
import Features1 from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/components/pages/Features1.jsx"
import Features2 from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/components/pages/Features2.jsx"
import Footer from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/components/pages/Footer.jsx"
import ContactUs from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/components/pages/ContactUs.jsx"
import Page from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/components/pages/Page.jsx"
import gamer from "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/images/gamer.webp"

import "./App.css"
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Features1></Features1>
      <div className="img"></div>
      <Page></Page>
      <Features2 ></Features2>
      <div className="img" id="one"></div>
      <ContactUs></ContactUs>
      <Footer></Footer>

    </>
  )
}

export default App
