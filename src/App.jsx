
import './App.css'
import { Header } from './components/Header'
import Body from './components/Body.jsx'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <div className='grid place-items-center gap-4'>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
     </div>
    </>
  )
}

export default App
