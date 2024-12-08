import Landing from "./pages/Landing";
import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Dashbord</div>}/>
      <Route path="/register" element={<div>Register</div>}/>
      <Route path="/" element={<div>Dashbord</div>}/>
      <Route path="/" element={<div>Dashbord</div>}/>
      <Route path="/" element={<div>Dashbord</div>}/>
        <Landing/>
    </Routes>
    

    </BrowserRouter>
  )
}

export default App;
 