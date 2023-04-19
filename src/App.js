//Importación de estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Importación de Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importaciones de las paginas
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import Book from './views/Book';
import BooksList from './views/BooksList';
import HomeInventary from './views/Inventario/HomeInventary';
import FormBook from './views/Inventario/FormBook';

import PurchaseUR from './views/Compras/PurchaseUR';
import OrdersHome from './views/Compras/OrdersHome';
import OrderAppli from './views/Compras/OrderAppli';
import OrdersMod from './views/Compras/OrdersMod';
import OrdersView from './views/Compras/OrdersView';
import SuppHome from './views/Compras/SuppHome';
import SuppMod from './views/Compras/SuppMod';
import SuppView from './views/Compras/SuppView';

import { UserProvider } from './models/UserContext';


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

          <Route path='/purchaseem' element={<PurchaseUR />} />
          <Route path='/ordershome' element={<OrdersHome />} />
          <Route path='/orderappli' element={<OrderAppli />} />
          <Route path='/ordersmod' element={<OrdersMod />} />
          <Route path='/ordersview' element={<OrdersView />} />
          <Route path='/supphome' element={<SuppHome />} />
          <Route path='/suppmod' element={<SuppMod />} />
          <Route path='/suppview' element={<SuppView />} />
          
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
