
import { Link } from 'react-router-dom';

const LittlePets = () => {
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
            Little Pets
          </p>





        </div>
      </section>

      <section className="px-8 md:px-16 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-center items-start">

          {/* LEFT SIDE */}
          <div className="flex-1 max-w-2xl">
            <img
              src="/images/cute.jpg"
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
          Little pets, though small in size, bring enormous joy, companionship, and life to any home. These animals, which include hamsters, rabbits, guinea pigs, birds, fish, and other miniature companions, have distinct personalities and needs that make them fascinating members of a household. Despite their size, they often form strong bonds with their human caregivers, offering affection, entertainment, and a sense of responsibility that enriches daily life.

          Caring for little pets requires attention to their specific habitats, diets, and social needs. Hamsters and gerbils, for example, thrive in spacious cages with tunnels and wheels to explore, while rabbits need soft bedding, safe spaces to hop around, and opportunities for social interaction. Birds, whether small parakeets or canaries, benefit from perches, toys, and stimulation that mimic their natural environments. Even fish, often seen as low-maintenance pets, require carefully maintained tanks with proper water conditions and enrichment to flourish.

          Despite their small stature, these pets are capable of forming recognizable routines and bonds. Many will respond to their owners’ voices, learn simple tricks, and engage in playful behavior. Guinea pigs may squeak in excitement when food is offered, while rabbits can nuzzle or follow their humans around the room. Birds may whistle or mimic sounds, bringing personality and vibrancy to the home. The interactions may be subtler than those of larger animals like dogs and cats, but they are no less meaningful, providing comfort, amusement, and companionship.




        </p>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex justify-between mt-32 px-6 md:px-16 lg:px-32">
          {/* Previous Post */}
          <div className="flex justify-center items-center text-center gap-4">
            <Link to="/dogandcatfamily" className="flex items-center gap-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden group">
                {/* Image */}
                <img
                  src="/images/cutedc.jpg"
                  alt="Dog and Cat Family"
                  className="w-full h-full object-cover transition duration-300"
                />
                {/* Red overlay */}
                <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-50 transition rounded-full"></div>
                {/* Left arrow */}
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-10  text-2xl opacity-0 group-hover:opacity-100 transition cursor-pointer">
                  &#8592;
                </span>
              </div>

              <div className="flex flex-col gap-4 ml-4 text-left">
                <h1 className="text-2xl text-gray-500">Previous Post</h1>
                <p className="color font-bold">Dog and Cat Family</p>
              </div>
            </Link>
          </div>

          {/* Next Post */}
          <div className="flex justify-center items-center text-center gap-4">
            <Link to="/leopardcat" className="flex items-center gap-4">
              <div className="flex flex-col gap-4 mr-4 text-right">
                <h1 className="text-xl text-gray-500">Next Post</h1>
                <p className="color font-bold">Leopard Cat</p>
              </div>

              <div className="relative w-32 h-32 rounded-full overflow-hidden group">
                {/* Image */}
                <img
                  src="/images/leopardcat.jpg"
                  alt="Leopard Cat"
                  className="w-full h-full object-cover transition duration-300"
                />
                {/* Red overlay */}
                <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-50 transition rounded-full"></div>
                {/* Right arrow */}
                <span className="absolute right-2 top-1/2 -translate-y-1/2 p-10 text-white text-2xl opacity-0 group-hover:opacity-100 transition cursor-pointer">
                  &#8594;
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="flex md:hidden justify-center items-center mt-16 gap-16">
          <Link
            to="/dogandcatfamily"
            className="text-4xl text-gray-400 hover:text-red-500 transition cursor-pointer"
          >
            &#8592;
          </Link>
          <Link
            to="/leopardcat"
            className="text-4xl text-gray-400 hover:text-red-500 transition cursor-pointer"
          >
            &#8594;
          </Link>
        </div>
























      </section >
































    </div >




















  )
}

export default LittlePets