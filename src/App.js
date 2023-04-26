//Importación de estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Importación de Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importaciones de las paginas
import Login from './views/ClienteAnonimo/Login';
import Register from './views/ClienteAnonimo/Register';
import Home from './views/Home';
import Book from './views/Devoluciones/Book';
import BooksList from './views/BooksList';
import HomeInventary from './views/Inventario/HomeInventary';
import FormBook from './views/Inventario/FormBook';
import Cart from './views/Devoluciones/Cart';
import Payment from './views/ClienteRegistrado/Payment';
import Account from './views/Devoluciones/Account';


// All imports for Compras
import PurchaseHome from './views/Compras/PurchaseHome';
import ViewProducts from './views/Compras/Products/ViewProducts';
import ModProducts from './views/Compras/Products/ModProducts';
import UpProduct from './views/Compras/Products/UpProduct';
import DownProduct from './views/Compras/Products/DownProduct';
// Emd imports for Compras

// All imports for Customer Support
import CustomerSuppHome from './views/CustomerSupp/CSHome';
import CallForm from './views/CustomerSupp/CallForm';
import EmailForm from './views/CustomerSupp/EmailForm';
import Terms from './views/CustomerSupp/Terms';
import Privacity from './views/CustomerSupp/Privacity';
// End imports for Customer Support

import { UserProvider } from './models/UserContext';
import Devoluciones from './views/Devoluciones/DevolucionesCliente';
import DevolucionesHome from './views/Devoluciones/DevolucionesHome';



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
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/payment' element={<Payment />} />
          <Route path='/account' element={<Account />}/>
          <Route path='/devoluciones' element={<Devoluciones/>}/>
          <Route path='/devolucionesHome' element={<DevolucionesHome/>}/>

      //Routes for Compras
          <Route path='/purchasehome' element={<PurchaseHome />} />
          <Route path='/upproduct' element={<UpProduct />} />
          <Route path='/downproduct' element={<DownProduct />} />
          <Route path='/viewproducts' element={<ViewProducts />} />
          <Route path='/modproducts' element={<ModProducts />} />
        //End routes for Compras

        //Routes for Customer Support
          <Route path='/cshome' element={<CustomerSuppHome />} />
          <Route path='/callform' element={<CallForm />} />
          <Route path='/emailform' element={<EmailForm />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacity' element={<Privacity />} />
        //End routes for Customer Support

        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
