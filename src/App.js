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
import PurchaseUR from './views/Compras/PurchaseUR';
import OrdersHome from './views/Compras/OrdersViews/OrdersHome';
import OrderAppli from './views/Compras/OrdersViews/OrderAppli';
import OrdersMod from './views/Compras/OrdersViews/OrdersMod';
import OrdersView from './views/Compras/OrdersViews/OrdersView';
import SuppHome from './views/Compras/SuppViews/SuppHome';
import SuppMod from './views/Compras/SuppViews/SuppMod';
import SuppView from './views/Compras/SuppViews/SuppView';
import UpSupp from './views/Compras/UpndDown/UpSupp';
import UpProduct from './views/Compras/UpndDown/UpProduct';
import DownSupp from './views/Compras/UpndDown/DownSupp';
import DownProduct from './views/Compras/UpndDown/DownProduct';
// Emd imports for Compras


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

      //Routes for Compras all
          <Route path='/purchaseem' element={<PurchaseUR />} />
          <Route path='/ordershome' element={<OrdersHome />} />
          <Route path='/orderappli' element={<OrderAppli />} />
          <Route path='/ordersmod' element={<OrdersMod />} />
          <Route path='/ordersview' element={<OrdersView />} />
          <Route path='/supphome' element={<SuppHome />} />
          <Route path='/suppmod' element={<SuppMod />} />
          <Route path='/suppview' element={<SuppView />} />
          <Route path='/upsupp' element={<UpSupp />} />
          <Route path='/upproduct' element={<UpProduct />} />
          <Route path='/downsupp' element={<DownSupp />} />
          <Route path='/downproduct' element={<DownProduct />} />
        //End routes for compras


        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
