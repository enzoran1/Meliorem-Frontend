
import './App.scss';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
     
    </div>
  );
}

export default App;
