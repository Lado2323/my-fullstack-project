
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useRef } from "react";


const Footer = () => {

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const input = form.querySelector("input[type='email']") as HTMLInputElement;


    if (form.checkValidity()) {
      console.log("Subscribed with:", input.value);
      form.reset();
    };
  }





















  return (

    <footer className="footer border-t mt-40 border-border py-12 min-h-[300px] text-white">
      <div className="container  px-8 mx-auto ">
        <div className=" flex justify-between md:grid-cols-4 gap-3 pr-10">
          <div className="md:col-span-1 sm:w-80 hidden  md:block">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-xl  font-bold">Sign up for our newsletter</h2>
            </Link>
            <p className="text-muted-foreground mt-8">
              Get the latest deals and offers right to your inbox.
            </p>


            <form ref={formRef} 
              onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 mt-6 ">
              <input
                type="email"
                placeholder="Email"

                required
                className="w-full sm:w-72 h-12 px-4 border border-gray-300 
             bg-transparent text-white placeholder:text-gray-400 
             rounded-md focus:outline-none focus:border-white"

              />





              <Button type="submit" className="w-36" variant="primary">Subscribe</Button>
            </form>


















          </div>

          <div>
            <h3 className="text-xl mb-14">Categories</h3>
            <ul className="space-y-2 italic text-lg">
              <li><Link to="/products?category_name=Beds" className='footerhov'>Beds</Link></li>
              <li><Link to="/products?category_name=Carriers" className="text-muted-foreground footerhov transition-colors">Carriers</Link></li>
              <li><Link to="/products?category_name=Food" className="text-muted-foreground footerhov transition-colors">Food</Link></li>
              <li><Link to="/products?category_name=Toys" className="text-muted-foreground footerhov transition-colors">Toys</Link></li>

            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-14">Contacts</h3>
            <ul className="space-y-2 italic text-lg">
              <li className="text-muted-foreground">Phone: (+63) 555 1212</li>
              <li className="text-muted-foreground">Fax: (+63) 555 0100</li>
              <li className="text-muted-foreground">Email: info@email.com</li>

            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-14 sm:w-80 hidden  md:block">Opening Hours</h3>

            <ul className="space-y-2 italic text-lg">

              <p >Mon - Fri: 10am - 8pm</p>
              <p >Sat: 10am - 4pm</p>
              <p >Sun: 10am - 6pm</p>

            </ul>

          </div>
        </div>

        <div className="mt-40 pt-8 border-t border-border">
          <p className="text-center mt-3 text-gray-300 ext-transparent bg-clip-text">
            Copyright © {new Date().getFullYear()}  Petsy - WordPress Theme by CreativeThemes.
          </p>
        </div>
      </div>
    </footer>


  )
}

export default Footer
