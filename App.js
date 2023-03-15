import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Navbar2 from './components/Navbar2';
function App() {
  return (
    <div className="App">
     {/* <Login></Login> */}
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/Signup' element={<Signup></Signup>}></Route>
      <Route path='/Contact' element={<Contact></Contact>}></Route>
      <Route path='/Navbar2' element={<Navbar2></Navbar2>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
