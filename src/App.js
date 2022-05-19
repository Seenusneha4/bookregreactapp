import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Login/>}/>
       <Route path="/register" exact element={<Register/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
