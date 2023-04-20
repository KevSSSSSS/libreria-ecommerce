import { useState } from "react";

function CartModel() {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    setCart([...cart, product]);
  };

  const removeCart = (productId) => {
    const filteredUsers = cart.filter((product) => product.id !== productId);
    setCart(filteredUsers);
  };

  return {
    cart,
    addCart,
    removeCart,
  };
}

export default CartModel;