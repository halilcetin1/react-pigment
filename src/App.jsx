
import Containerx from "./components/Containerx"
import './css/responsiveDesign.css'
import Routers from "./components/Routers"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"




function App() {
  

  return (
   <div className="app">
<div className="main">


<Navbar/>

 <Containerx  >

<Routers/>
 </Containerx>
 </div>

 <div>
 <Footer/>
 </div>
   </div>
  )
}

export default App
