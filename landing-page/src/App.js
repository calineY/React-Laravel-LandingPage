import './App.css';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <main className="form-signin pad-top">
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>;
          </Routes>
        </main>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
