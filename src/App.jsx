import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Destination from './pages/Destination'
import './App.css' 
import 'remixicon/fonts/remixicon.css'
   
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/destination" element={<Destination/>}/>
     
    </Routes>
    </BrowserRouter>

  )
}
export default App