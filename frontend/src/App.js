
import './App.css';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Login from './pages/Login';
import PNF from './pages/PNF';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useContext } from 'react';
import UserContext from './context/UserContext';
import ViewSingle from './components/ViewSingle';
function App() {
  let ctx = useContext(UserContext)
  let loginValue = ctx.details.login
  console.log(loginValue)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        {loginValue===true &&  <Route path='/' element={<Home/>}/>}
        {loginValue===false &&  <Route path='/' element={<Navigate to={'/login'}/>}/>}
         {loginValue ===true && <Route path='/login' element={<Navigate to={'/'}/>}/>}
         {loginValue ===false && <Route path='/login' element={<Login/>}/>}
         {<Route path='/single' element={<ViewSingle/>}/>}
          <Route path='/register' element={<Signup/>}/>
          <Route path='/*' element={<PNF/>}/>

          


        </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
