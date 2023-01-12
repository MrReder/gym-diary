import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchOfWorkouts from './components/SearchOfWorkouts';
import Main from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Workouts from './pages/Workouts';
import MuscleGroups from './pages/MuscleGroups';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <SearchOfWorkouts />
      <Routes>
        <Route path='/' exact element={<Main />}/>
        <Route path='/my-workouts/' element={<Workouts />}/>
        <Route path='/muscle-groups/' element={ <MuscleGroups />}/>
      </Routes>
     <Footer />
    </Router>
    </>
    
  );
}

export default App;
