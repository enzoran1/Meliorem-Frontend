
import './App.scss';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
