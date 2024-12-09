
import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import {Dashbord, Landing, Error,Register} from './pages'
function App() {
  return (
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Dashbord/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/landing" element={<Landing/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    

    </BrowserRouter>
  )
}

export default App;
  