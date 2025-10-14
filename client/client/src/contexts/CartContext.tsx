import React, { createContext, useContext, useState } from "react";

interface CartContextType {
  itemCount: number;
  addItem: () => void;
  clearAllCart: () => void;
    removeItem: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [itemCount, setItemCount] = useState(0);

  const addItem = () => setItemCount((prev) => prev + 1);
  const removeItem = () => setItemCount(prev => (prev > 0 ? prev - 1 : 0));
  const clearAllCart = () => setItemCount(0);

  return (
    <CartContext.Provider value={{ itemCount, addItem, clearAllCart,removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
