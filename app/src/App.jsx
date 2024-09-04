import './App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Beneficios from './pages/Beneficios';
import Beneficio from './pages/Beneficio';
import Creas from './pages/Creas';
import Cras from './pages/Cras';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beneficios" element={<Beneficios />} />
        <Route path="/beneficios/:id" element={<Beneficio />} />
        <Route path="/creas" element={<Creas />} />
        <Route path="/cras" element={<Cras />} />
      </Routes>
    </Router>
  );
}
  

export default App;