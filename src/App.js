import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="logout" element={<Logout></Logout>}></Route>

      </Routes>
    </div>
  );
}

export default App;
