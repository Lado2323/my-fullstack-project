
import { Link, NavLink } from 'react-router-dom'
import { List, User, ShoppingCart } from 'lucide-react'
import { Button } from '../ui/button'
import { useCart } from '@/contexts/CartContext'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useState } from 'react'
import { Menu, X } from "lucide-react";



const Navbar: React.FC = () => {

  const { itemCount } = useCart();
   const [menuOpen, setMenuOpen] = useState(false);

  const user = useSelector((state: RootState) => state.auth.user)


































  return (

    <nav className="h-32 shadow-lg bg-[url('/background-pr.jpeg')] bg-cover bg-center bg-fixed border-b border-slate-200 top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-42 h-10 flex justify-center items-center">
              <img
                src="https://startersites.io/blocksy/petsy/wp-content/uploads/2021/11/logo-light.svg"
                alt="Logo"
                className="h-10 object-contain"
              />
            </div>
          </Link>

          {/* Nav Links - Bigger */}
          <div className="hidden md:flex items-center space-x-10"> {/* increased space */}
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products", },
              { to: "/aboutus", label: "About us" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label, }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg text-lg  tracking-wide transition-all duration-200 ${isActive
                    ? "text-rose-200"
                    : "text-gray-200 hover:text-white"
                  }`
                }
              >

                <span>{label}</span>
              </NavLink>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-5">
            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart
                  size={26}
                  className="text-white hover:text-red-400 transition-colors duration-200 cursor-pointer"
                />

                {user && itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center animate-pulse">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* User */}


            {user ? (
              <Link to="/profile">
                <Button variant="ghost" size="sm">
                  <User
                    size={26}
                    className="text-white hover:text-red-400 transition-colors duration-200 cursor-pointer"
                  />
                </Button>

              </Link>
            ) : (


              <Link to="/signin">
                <Button variant="ghost" size="sm">
                  <User
                    size={26}
                    className="text-white hover:text-red-400 transition-colors duration-200 cursor-pointer "
                  />
                </Button>
              </Link>
            )}

             <button
        className="md:hidden text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} color="#fffdfa" /> : <Menu size={28} color="#fffdfa"/>}
       
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white font mt-8 shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/aboutus" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          
        </div>
      )}







          </div>
        </div>
      </div>
    </nav>














  )
}

export default Navbar




