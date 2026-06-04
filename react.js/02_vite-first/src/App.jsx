import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <>
      <Navbar/>
      
      <div className="cards">
        <Card title="card 1" description="First card ka description!"/>
        <Card title="card 2" description="Second card ka description!"/>
        <Card title="card 3" description="Third card ka description!"/>
        <Card title="card 4" description="Fourth card ka description!"/>
        
      </div>
      <Footer/>
    </>
  )
}

export default App
