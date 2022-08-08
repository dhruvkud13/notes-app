import './App.css';
import Header from './components/Header';
import NotesList from './pages/NotesList';
import NotesPage from './pages/NotesPage';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
      
      <Route path='/' exact element={<NotesList />} />
      <Route path='/notes/:id' element={<NotesPage />} />
    </Routes>
    </div>
    </Router>
    
  );
}

export default App;


// build is what we deploy to react

// hash routing can be used for this- before react files can get together and do routing, django already loads page and cant find route, so to prevent this we use hash routing