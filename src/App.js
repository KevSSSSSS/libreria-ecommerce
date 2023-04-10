//Importación de estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Importación de Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importaciones de las paginas
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Book from './pages/Book';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/book/:book' element={<Book/>}/>
      </Routes>
    </Router>
  );
}

export default App;
