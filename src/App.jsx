import './App.css'
import { Header, Contact, About, Services, Footer } from './Sections/index'
function App() {

  return (
    <div className=' font-montserrat gap-[2rem] bg-blue-200  flex items-center flex-col  justify-center'>
      <Header />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
