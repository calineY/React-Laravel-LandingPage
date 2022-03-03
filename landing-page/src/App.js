import './App.css';
import Login from './pages/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedDashboard from './components/ProtectedDashboard';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <main className="form-signin pad-top">
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            {/* dashboard is under protected route, only logged in users can see it */}
            <Route element={<ProtectedDashboard/>}>
              <Route path='/dashboard' element={<Dashboard/>}/>;
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
