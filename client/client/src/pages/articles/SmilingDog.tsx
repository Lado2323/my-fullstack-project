import React from 'react'
import { Link,  } from 'react-router-dom';

const SmilingDog = () => {


 const items = [
    { id: 1, color: "bg-stone-50", img: "fish.svg", text: "Food", Link:"/products?category_name=Food" },
    { id: 2, color: "bg-stone-50", img: "bed-double.svg", text: "Beds", Link:"/products?category_name=Beds" },
    { id: 3, color: "bg-stone-50", img: "shopping-basket.svg", text: "Carriers", Link:"/products?category_name=Carriers"},
    { id: 4, color: "bg-stone-50", img: "volleyball.svg", text: "Toys", Link:"/products?category_name=Toys"},
  ];















  return (

    <div>
      <section className="flex flex-col justify-center items-center text-center bg-[url('/background-pr.jpeg')]    mx-auto">
        {/* LEFT COLUMN */}
        <div className="max-w-2xl items-center mt-16">



          <p className="text-7xl font-bold mb-6 p-16 text-gray-200 italic leading-tight">
            Smiling Dog
          </p>





        </div>
      </section>

      <section className="px-8 md:px-16 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-center items-start">

          {/* LEFT SIDE */}
          <div className="flex-1 max-w-2xl">
            <img
              src="/images/smilingdog.jpg"
              alt="Smiling Dog"
              className="w-full h-[500px] object-cover rounded-xl shadow-lg mb-6"
            />

          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 w-full lg:w-[400px]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Categories
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
              {items.map((item) => (
                <Link key={item.id} to={item.Link}>
                  <div
                    className={`p-4 rounded-lg shadow ${item.color} flex flex-col items-center justify-center h-48 hover:bg-[#d27c61] transition`}
                  >
                    <img
                      src={item.img}
                      alt={item.text}
                      className="w-16 h-16 mb-2"
                    />
                    <p className="text-gray-800 font-semibold">{item.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
        <p className="text-2xl text-gray-500 font-seriff leading-relaxed mt-8 ">
          Dogs have always been known as humankind’s best friends. They are loyal, affectionate, and capable of forming deep emotional bonds with the people they love. Among all the wonderful traits dogs possess, two of the most heartwarming are kindness and the appearance of a smile. A smiling dog can instantly brighten anyone’s day, and a kind dog can teach us lessons about love, patience, and understanding. But what exactly makes a dog “kind” or “smiling”? Is it just the shape of their face, or does it reflect something deeper — a mirror of their gentle spirit? Let’s explore the fascinating world of kind and smiling dogs.

          The Meaning of a Dog’s Smile

          When people talk about a dog’s smile, they often refer to that adorable moment when a dog’s mouth opens slightly, its lips curve upward, and its eyes look relaxed and joyful. Scientifically speaking, dogs do not “smile” the same way humans do. However, their facial expressions often show emotions such as happiness, comfort, and affection. When a dog is calm, content, and feels safe, its face naturally softens. The corners of its mouth may lift slightly, giving the impression of a smile.

          In many cases, dogs learn to mimic their owners’ behavior. If you smile at your dog often, use a gentle voice, and treat it kindly, your dog may begin to reflect those same expressions back at you. It’s their way of communicating joy, trust, and connection. So while a dog’s smile may not carry the same meaning as a human’s, it absolutely represents a state of happiness and emotional comfort.





        </p>

        {/* DESKTOP VERSION */}
        <div className="
            hidden md:flex 
            justify-between 
            items-center 
            mt-32 
            px-6 md:px-16 lg:px-32
          ">
          {/* LEFT (Previous Post) */}
          <div className="flex justify-center items-center text-center gap-4">
            <Link to="/" className="flex items-center gap-4">
              {/* Image */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden group">
                <img
                  src="/images/catnd.jpg"
                  alt="Previous Post"
                  className="w-full h-full object-cover transition duration-300"
                />
                <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-50 transition rounded-full"></div>
                <span className="absolute left-2 top-1/2 -translate-y-1/2 p-10 text-white text-3xl opacity-0 group-hover:opacity-100 transition cursor-pointer">
                  &#8592;
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 ml-4 text-left">
                <h1 className="text-2xl text-gray-500">Home</h1>
                <p className="color font-bold text-base"></p>
              </div>
            </Link>
          </div>

          {/* RIGHT (Next Post) */}
          <div className="flex justify-center items-center text-center gap-4">
            <Link to="/dogandcatfamily" className="flex items-center gap-4">
              {/* Text */}
              <div className="flex flex-col gap-2 mr-4 text-right">
                <h1 className="text-lg text-gray-500">Next Post</h1>
                <p className="color font-bold text-lg">Dog and Cat Family</p>
              </div>

              {/* Image */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden group">
                <img
                  src="/images/cutedc.jpg"
                  alt="Next Post"
                  className="w-full h-full object-cover transition duration-300"
                />
                <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-50 transition rounded-full"></div>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 p-10 text-white text-3xl opacity-0 group-hover:opacity-100 transition cursor-pointer">
                  &#8594;
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* MOBILE VERSION */}
        <div className="flex md:hidden justify-center items-center mt-16 gap-16">
          <Link
            to="/"
            className="text-4xl text-gray-400 hover:text-red-500 transition cursor-pointer"
          >
            &#8592;
          </Link>
          <Link
            to="/dogandcatfamily"
            className="text-4xl text-gray-400 hover:text-red-500 transition cursor-pointer"
          >
            &#8594;
          </Link>
        </div>























      </section >
































    </div >

  )
}

export default SmilingDog