import './App.css'
import { Home, Jobs, Register, Service_Details } from './Pages/index'
import { Header, Footer } from './Sections/index'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (

    <div>
      <Header/>
     <div>
     <Routes>
        <Route element={<Home/>} path='/' >
          <Route element={<Service_Details/>} path=':Services' />
        </Route>
        <Route element={<Jobs/>} path='/Jobs' />
        <Route element={<Register/>} path='/Register' />
      </Routes>
     </div>
     <Footer/>
    </div>
  )
}

export default App
