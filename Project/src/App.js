import logo from './logo.svg';
import './App.css';
import './Registration.css'
import Registration from './Registration'
import Login from './Login';
import './Login.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Registration/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
