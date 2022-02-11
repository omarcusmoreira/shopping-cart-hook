import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RocketShoes:cart')

    if (storagedCart) {
      console.log("Cart:  "+ JSON.parse(storagedCart));
       return [JSON.parse(storagedCart)];
     }
    return [];
  });

  const [stock, setStock] = useState<Stock[]>(() => {
    const storagedStock = localStorage.getItem('@RocketShoes:stock')

    if (storagedStock) {
      console.log("Stock:  "+ storagedStock);
       return [JSON.parse(storagedStock)];
     }
    return [];
  });

  const storagedCart = localStorage.getItem('@RocketShoes:cart')


  const addProduct = async (productId: number) => {
   
    const productsInStock = stock.find((product) => product.id === productId);
    const productsInCart = cart.find((product) => product.id === productId);

    try {
      // TODO

    } catch {
      // TODO
    }
  };

  const removeProduct = (productId: number) => {
    try {
      // TODO
    } catch {
      // TODO
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      // TODO
    } catch {
      // TODO
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
