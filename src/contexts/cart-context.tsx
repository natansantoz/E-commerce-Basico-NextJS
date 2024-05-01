"use client";

import { createContext, useContext, useState } from "react";

interface CartItem {
  productId: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (productId: number) => void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(productId: number) {
    // Atualiza o estado do carrinho
    setCartItems((previousCartState) => {
      // Verifica se o produto já está no carrinho
      const productInCart = previousCartState.some(
        (item) => item.productId === productId
      );

      if (productInCart) {
        // Retorna um novo array com a quantidade do produto atualizada
        return previousCartState.map((item) => {
          // Se o item atual é o produto que queremos adicionar
          if (item.productId === productId) {
            // Retorna um novo objeto com a quantidade atualizada
            return { ...item, quantity: item.quantity + 1 };
          }

          // Se o item atual não é o produto que queremos adicionar, retorna o item sem alterações
          return item;
        });
      } else {
        
        // Se o produto não está no carrinho, retorna um novo array com o produto adicionado
        return [...previousCartState, { productId: productId, quantity: 1 }];
      }
    });
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
