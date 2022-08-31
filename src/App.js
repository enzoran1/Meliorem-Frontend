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
import GlobalyQuiz from "./pages/quizSpeaker/GlobalyQuiz/GlobalyQuiz";
import ListeCours from "./pages/coursSpeaker/ListeCours/ListeCours";
import ListeQuiz from "./pages/quizSpeaker/ListeQuiz/ListeQuiz";
import ListeCoursStudent from "./pages/coursStudent/ListeCoursStudent/ListeCoursStudent";
import EntityView from "./pages/EntityView/EntityView";

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
        <Route path="/liste-quiz-intervenant" element={<ListeQuiz />} />
        <Route path="/liste-cours-intervenant" element={<ListeCours />} />
        <Route
          path="/liste-quiz-globaly-intervenant"
          element={<GlobalyQuiz />}
        />
        <Route
          path="/formulaire-quiz-intervenant"
          element={<ListeCoursStudent />}
        />
        <Route path="/liste-cours-etudiant" element={<ListeCoursStudent />} />
        <Route path="/:entity/view/:id" element={<EntityView />} />
      </Routes>
    </div>
  );
}

export default App;
