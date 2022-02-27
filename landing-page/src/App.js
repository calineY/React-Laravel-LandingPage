import './App.css';
import Navigation from './components/Navigation';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <main className="form-signin pad-top">
       <Login/>
      </main>
    
    </div>
  );
}

export default App;
