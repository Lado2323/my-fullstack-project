import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useRef } from "react";

const Home = () => {


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








  const items = [
    { id: 1, color: "bg-stone-50", img: "fish.svg", text: "Food", Link:"/products?category_name=Food" },
    { id: 2, color: "bg-stone-50", img: "bed-double.svg", text: "Beds", Link:"/products?category_name=Beds" },
    { id: 3, color: "bg-stone-50", img: "shopping-basket.svg", text: "Carriers", Link:"/products?category_name=Carriers"},
    { id: 4, color: "bg-stone-50", img: "volleyball.svg", text: "Toys", Link:"/products?category_name=Toys"},
  ];

  const sellers = [
    {
      id: 1,
      color: "bg-stone-400",
      img: "https://startersites.io/blocksy/petsy/wp-content/uploads/2021/11/product-thumb-15_optimized.webp",
      description: "Pink bed and carrier",
      price: "$60.00",
      name: "Beds",
    },
    {
      id: 2,
      color: "bg-stone-400",
      img: "https://startersites.io/blocksy/petsy/wp-content/uploads/2021/11/product-thumb-11_optimized.webp",
      description: "Dog police shirt ",
      price: "$30.00",
      name: "Costumes",
    },
    {
      id: 3,
      color: "bg-stone-400",
      img: "https://startersites.io/blocksy/petsy/wp-content/uploads/2021/11/product-thumb-12_optimized.webp",
      description: "Bear hat",
      price: "$15.00",
      name: "Costumes",
    },
    {
      id: 4,
      color: "bg-stone-400",
      img: "https://startersites.io/blocksy/petsy/wp-content/uploads/2021/11/product-thumb-13_optimized.webp",
      description: "Little kitten's favourite ",
      price: "$10.00",
      name: "Toys",
    },
    {
      id: 5,
      color: "bg-stone-400",
      text: "hdbdnh",
      img: "https://startersites.io/blocksy/petsy/wp-content/uploads/2021/11/product-thumb-14_optimized.webp",
      description: "Basketball",
      price: "$12.00",
      name: "Toys"
    },
    {
      id: 6,
      color: "bg-stone-400",
      text: "hdbdnh",
      img: "https://startersites.io/blocksy/petsy/wp-content/uploads/2021/11/raoul-droog-Ea8rP2Ebp_4-unsplash_optimized.webp",
      description: "Big cat's carrier",
      price: "$55.00",
      name: "Carriers"
    },
  ];

  const infos = [
    {
      id: 1,
      text: 'DECEMBER 2, 2024',
      img: "/images/smilingdog.jpg",
      description: "Smiling dog",
      link: "/smilingdog"





    },
    {
      id: 2,
      text: 'DECEMBER 2, 2024',
      img: "/images/cutedc.jpg",
      description: "Dog and cat's family",
      link: "/dogandcatfamily"





    },
    {
      id: 3,
      text: 'DECEMBER 2, 2024',
      img: "/images/cute.jpg",
      description: "Little pets",
      link: "/littlepets"





    },
    {
      id: 4,
      text: 'DECEMBER 2, 2024',
      img: "/images/leopardcat.jpg",
      description: "Leopard cat",
      link: "leopardcat"





    },

  ];

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="flex flex-col-reverse md:flex-row justify-center items-center bg-[url('/background-pr.jpeg')] bg-cover bg-center h-auto md:h-screen px-6 md:px-12 py-12 gap-16">
        {/* LEFT */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-sm md:text-xl mt-4 text-gray-400 mb-4">
            We Have The Best Products
          </h1>
          <p className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-200 leading-tight">
            Your Pet's <br /> Favourite place
          </p>
          <p className="text-sm md:text-md text-stone-200 mb-6 leading-relaxed">
            In consequat, quam id sodales hendrerit, eros mi lacinia risus neque tristique augue proin tempus urna congue elementum.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary  text-base h-12"
            variant={"primary"}
          >
            <Link to="/contact">Explore Now</Link>
          </Button>
        </div>
        {/* RIGHT */}
        <div className="flex justify-center ml-8 md:justify-end">
          <img
            src="/images/main.webp"
            alt="Dog"
            className="w-64 sm:w-80 object-cover md:w-96 h-auto "
          />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Categories</h2>
          <p className="text-center text-gray-400 text-lg md:text-2xl mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {items.map((item) => (
              <Link key={item.id} to={item.Link}>
                <div className={`p-4 rounded-lg shadow ${item.color} flex flex-col items-center justify-center h-40 sm:h-48 hover:bg-[#d27c61] transition`}>
                  <img
                    src={item.img}
                    alt={item.text}
                    className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
                  <p >{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <span className="text-gray-300 font-bold text-sm md:text-lg">ALL-TIME FAVOURITE</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-10">Coming soon</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellers.map((seller) => (
              <div key={seller.id} className="flex flex-col items-center space-y-4">
                <div className="relative overflow-hidden flex flex-col items-center justify-center h-64 w-full hover:shadow-2xl transition duration-1300 ease-in-out cursor-pointer transition h-56 sm:h-64 rounded-lg">
                  <img
                    src={seller.img}
                    alt={seller.name}
                    className="w-full h-full object-cover" />
                </div>
                <div className="text-center items-center flex flex-col space-y-2">
                  <h3 className="text-gray-300 color text-lg font-bold">{seller.description}</h3>
                  <span className="font text-md text-gray-200">{seller.price}</span>
                  <p className="">{seller.name}</p>

                  <Link to="/products">

                    <Button className="w-32 mt-3 text-md" size="md" variant="primary">
                      Add to cart
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR INFO */}
      <section className="py-16">
        <div className=" mx-auto px-8">
          <span className="text-gray-300 font-bold text-sm md:text-lg">WHAT TO READ</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-10">Popular Info About Pets</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infos.map((info) => (
              <div key={info.id} className="flex flex-col  items-center space-y-4">
                <a href={info.link} target="_blank" rel="noopener noreferrer" className="w-full h-56 sm:h-64 relative rounded-lg overflow-hidden relative overflow-hidden flex flex-col items-center justify-center h-64 w-full hover:shadow-2xl transition duration-1300 ease-in-out cursor-pointer ">
                  <img src={info.img} alt={info.description} className="w-full h-full object-cover" />
                </a>
                <div className="flex flex-col gap-3 items-center text-center ">
                  <h3 className="text-gray-300 color font-serif text-lg font-bold text-center">{info.description}</h3>
                  <p className="text-lg  font-bold text-gray-400">{info.text}</p>


                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-6 py-12 bg-gray-100 mt-32 dcolor">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 ">
          <div className="flex-1 text-center lg:text-left relative">
            <h1 className="text-2xl md:text-4xl font-bold">Newsletter Updates</h1>
            <p className="text-gray-700 mt-4">
              Enter your email address below to subscribe.
            </p>
            <form ref={formRef}
              onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <input
                type="email"
                placeholder="Email"

                required
                className="w-full sm:w-72 h-12 px-4 border border-gray-300"

              />





              <Button type="submit" className="w-36" variant="primary">Subscribe</Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">Your privacy is our policy.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://startersites.io/blocksy/petsy/wp-content/uploads/2021/11/newsletter_dog_optimized.webp" alt="Newsletter Dog" className="absolute -translate-y-44 w-60 sm:w-80 hidden  md:block" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

