
import { Link } from 'react-router-dom'

const DogAndCatFamily = () => {

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
            Dog And Cat Family
          </p>





        </div>
      </section>

      <section className="px-8 md:px-16 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-center items-start">

          {/* LEFT SIDE */}
          <div className="flex-1 max-w-2xl">
            <img
              src="/images/cutedc.jpg"
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
          Dogs and cats have lived alongside humans for thousands of years, forming one of the most beloved and fascinating family dynamics in the animal kingdom. While dogs are often characterized by their loyalty, affection, and playful nature, cats are known for their independence, curiosity, and grace. When these two species share a home, they create a unique family structure that blends contrasting personalities, yet often results in deep bonds and companionship that can surprise many observers.

          Introducing a dog and cat family to a home requires careful attention to both species’ needs and temperaments. Dogs, generally social and active, may display excitement and curiosity toward a new feline family member, while cats may initially be cautious or wary of a larger, more energetic companion. Successful integration relies on patience, gradual introductions, and creating safe spaces where each animal feels secure. Over time, dogs and cats can learn to communicate, respect boundaries, and even engage in play together, showcasing remarkable adaptability.

          Interactions between dogs and cats can range from playful chasing and wrestling to gentle grooming and resting in close proximity. These behaviors are not only indicators of social bonding but also help reduce stress and provide mental stimulation for both animals. Families often observe dogs and cats developing routines, such as sharing sleeping areas, watching over each other, and forming strong attachments to the humans in their household. Some dogs take on protective roles toward their feline companions, while some cats demonstrate nurturing behaviors, highlighting the flexibility of interspecies relationships.




        </p>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex justify-between mt-32 px-6 md:px-16 lg:px-32">
          {/* Previous Post */}
          <div className="flex justify-center items-center text-center gap-4">
            <Link to="/smilingdog" className="flex items-center gap-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden group">
                {/* Image */}
                <img
                  src="/images/smilingdog.jpg"
                  alt="Smiling Dog"
                  className="w-full h-full object-cover transition duration-300"
                />

                {/* Red overlay on hover */}
                <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-50 transition rounded-full"></div>

                {/* Left arrow */}
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-10  text-2xl opacity-0 group-hover:opacity-100 transition cursor-pointer">
                  &#8592;
                </span>
              </div>

              <div className="flex flex-col gap-4 ml-4 text-left">
                <h1 className="text-2xl text-gray-500">Previous Post</h1>
                <p className="color font-bold">Smiling Dog</p>
              </div>
            </Link>
          </div>

          {/* Next Post */}
          <div className="flex justify-center items-center text-center gap-4">
            <Link to="/littlepets" className="flex items-center gap-4">
              <div className="flex flex-col gap-4 mr-4 text-right">
                <h1 className="text-xl text-gray-500">Next Post</h1>
                <p className="color font-bold">Little Pets</p>
              </div>

              <div className="relative w-32 h-32 rounded-full overflow-hidden group">
                {/* Image */}
                <img
                  src="/images/cute.jpg"
                  alt="Little Pets"
                  className="w-full h-full object-cover transition duration-300"
                />

                {/* Red overlay on hover */}
                <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-50 transition rounded-full"></div>

                {/* Right arrow */}
                <span className="absolute right-2 top-1/2 -translate-y-1/2 p-10  text-white text-2xl opacity-0 group-hover:opacity-100 transition cursor-pointer">
                  &#8594;
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="flex md:hidden justify-center items-center mt-16 gap-16">
          <Link
            to="/smilingdog"
            className="text-4xl text-gray-400 hover:text-red-500 transition cursor-pointer"
          >
            &#8592;
          </Link>
          <Link
            to="/littlepets"
            className="text-4xl text-gray-400 hover:text-red-500 transition cursor-pointer"
          >
            &#8594;
          </Link>
        </div>














      </section >
































    </div >

  )
}

export default DogAndCatFamily