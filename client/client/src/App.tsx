/* eslint-disable react-hooks/exhaustive-deps */
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import { productsLoader } from "./services/loader/loader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { useEffect } from "react";
import { tryFetchingUser } from "./services/api/user";
import { updateProfile } from "./store/slices/authSlice";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import EditProducts from "./pages/EditProducts";
import EditProfile from "./pages/EditProfile";
import Cart from "./pages/Cart";
import { tryGetCartItems } from "./services/api/cart";
import { addToCart } from "./store/slices/cartSlice";
import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import DogAndCatFamily from "./pages/articles/DogAndCatFamily";
import LittlePets from "./pages/articles/LittlePets";
import LeopardCat from "./pages/articles/LeopardCat";
import LittleOnes from "./pages/articles/LittleOnes";
import CuteCat from "./pages/articles/CuteCat";
import SadDog from "./pages/articles/SadDog";
import TogetherCatDog from "./pages/articles/TogetherCatDog";
import GrayCat from "./pages/articles/GrayCat";
import PlayTogether from "./pages/articles/PlayTogether";
import SadDogTwo from "./pages/articles/SadDogTwo";
import DogStick from "./pages/articles/DogStick";
import SmilingDog from "./pages/articles/SmilingDog";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* ✅ Routes WITHOUT Layout */}
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />

      {/* ✅ Routes WITH Layout */}
      <Route path="/" element={<Layout />} errorElement={<h1>Error 404</h1>}>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />

        {/* Articles */}
        <Route path="smilingdog" element={<SmilingDog />} />
        <Route path="dogandcatfamily" element={<DogAndCatFamily />} />
        <Route path="littlepets" element={<LittlePets />} />
        <Route path="leopardcat" element={<LeopardCat />} />
        <Route path="littleones" element={<LittleOnes />} />
        <Route path="cutecat" element={<CuteCat />} />
        <Route path="saddog" element={<SadDog />} />
        <Route path="togethercatdog" element={<TogetherCatDog />} />
        <Route path="graycat" element={<GrayCat />} />
        <Route path="playtogether" element={<PlayTogether />} />
        <Route path="saddogtwo" element={<SadDogTwo />} />
        <Route path="dogstick" element={<DogStick />} />

        <Route
          path="products"
          element={<Products />}
          loader={productsLoader}
        />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<Profile />} />
          <Route path="edit-products" element={<EditProducts />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Route>
    </>
  )
);







const App: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token)
  const dispatch = useDispatch()

  useEffect(() => {
    const checkUser = async () => {
      if (token) {
        try {
          const repsonse = await tryFetchingUser(token)
          dispatch(updateProfile(repsonse))
        } catch (err) {
          console.log("Error: ", err)
        }
      }
    }

    checkUser()
  }, [token])

  useEffect(() => {
    const fetchCart = async () => {
      if (token) {
        try {
          const cartItems = await tryGetCartItems(token)
          cartItems.forEach(cartItem => {
            dispatch(addToCart({
              id: cartItem.id,
              productId: cartItem.product_id,
              name: cartItem.cartProduct.title,
              price: cartItem.cartProduct.salePrice || cartItem.cartProduct.price,
              image: cartItem.cartProduct.image,
              quantity: cartItem.count
            }))
          })
        } catch (err) {
          console.log("Error: ", err);
        }
      }
    }

    fetchCart()
  }, [token])

  return (
    <RouterProvider router={router} />
  )
}

export default App;


// Pagination 
// loader -> add pageSize
// product.ts api -> interface and return type 
// Products component -> ProductsLoaderData + add some logic
// Pagination

// Buy
// sign outs