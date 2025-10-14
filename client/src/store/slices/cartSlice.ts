import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const calculateTotalPrice = (items: CartItem[]) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { total, itemCount };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }

      const totals = calculateTotalPrice(state.items);
      state.total = totals.total;
      state.itemCount = totals.itemCount;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }

      const totals = calculateTotalPrice(state.items);
      state.total = totals.total;
      state.itemCount = totals.itemCount;
    },
    incrementCartProduct: (state, action: PayloadAction<string>) => {
      const selectedItem = state.items.find(
        (item) => item.id === action.payload
      );

      selectedItem.quantity += 1;
      const totals = calculateTotalPrice(state.items);
      state.total = totals.total;
      state.itemCount = totals.itemCount;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, incrementCartProduct, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
