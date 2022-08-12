import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/dashboard/Dashboard/Dashboard";
import Cours from "./pages/cours/Cours/Cours";
import Quiz from "./pages/quiz/Quiz/Quiz";
import Contact from "./pages/contact/Contact/Contact";
import ListeBadges from "./pages/listeBadges/ListeBadges/ListeBadges";
import ListeUtilisateurs from "./pages/listeUtilisateurs/ListeUtilisateurs/ListeUtilisateurs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/quizz" element={<Quiz />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/liste-badges" element={<ListeBadges />} />
        <Route path="/liste-utilisateurs" element={<ListeUtilisateurs />} />
      </Routes>
    </div>
  );
}

export default App;
