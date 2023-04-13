//Importación de estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Importación de Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importaciones de las paginas
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Book from './pages/Book';
import BooksList from './pages/BooksList';
import HomeInventary from './pages/Inventario/HomeInventary';
import FormBook from './pages/Inventario/FormBook';

import { UserProvider } from './context/UserContext';


function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/book/:book' element={<Book />} />
          <Route path='/books' element={<BooksList />} />
          <Route path='/homeInventary' element={<HomeInventary />} />
          <Route path='/formBook' element={<FormBook />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
