
import { Link } from 'react-router-dom';

const LittleOnes = () => {
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
            Little  Members
          </p>





        </div>
      </section>

      <section className="px-8 md:px-16 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-center items-start">

          {/* LEFT SIDE */}
          <div className="flex-1 max-w-2xl">
            <img
              src="/images/last.jpg"
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
          Little cats and dogs often form bonds that are heartwarming and full of innocent affection. When they grow up together or spend significant time in the same household, their interactions are marked by curiosity, playfulness, and a gentle sense of companionship. A tiny kitten might nuzzle against a small puppy, or they may chase each other around the room, tails wagging and little paws pattering across the floor. Their energy and curiosity complement each other, turning ordinary moments into delightful scenes of mutual exploration and joy.

          Their love is expressed in subtle ways—shared naps curled up side by side, gentle grooming of each other’s fur, or sitting close together watching the world pass by. These moments reveal a deep trust and comfort in each other’s presence. The playful antics of a puppy can stimulate a kitten’s natural curiosity, while the kitten’s careful movements can teach a puppy patience and gentleness. Over time, these interactions build a bond that is both emotional and social, giving each animal a sense of companionship that enriches their daily lives.

          Observing the love between a little cat and dog highlights the beauty of cross-species friendship. Their innocent affection and playful gestures create an atmosphere of warmth and happiness, turning a home into a lively and nurturing environment. Whether they are sharing a cozy spot, engaging in playful chases, or simply lying peacefully together, their bond reflects the pure and unselfish nature of love, reminding us of the simple joys of connection, trust, and shared moments of joy.


        </p>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex justify-between mt-32 px-6 md:px-16 lg:px-32">
          {/* Previous Post */}
          <div className="flex justify-center items-center text-center gap-4">
            <Link to="/saddogtwo" className="flex items-center gap-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden group">
                <img
                  src="/images/saddog.jpg"
                  alt="Sad Dog"
                  className="w-full h-full object-cover transition duration-300"
                />
                <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-50 transition rounded-full"></div>
                <span className="absolute left-2 top-1/2 -translate-y-1/2 p-10  text-white text-2xl opacity-0 group-hover:opacity-100 transition cursor-pointer">
                  &#8592;
                </span>
              </div>

              <div className="flex flex-col gap-4 ml-4 text-left">
                <h1 className="text-2xl text-gray-500">Previous Post</h1>
                <p className="color font-bold">Sad Dog</p>
              </div>
            </Link>
          </div>

          {/* Next Post */}
          <div className="flex justify-center items-center text-center gap-4">
            <Link to="/blog" className="flex items-center gap-4">
              <div className="flex flex-col gap-4 mr-4 text-right">
                <h1 className="text-xl text-gray-500">Blog</h1>
              </div>

              <div className="relative w-32 h-32 rounded-full overflow-hidden group">
                <img
                  src="/images/petfamily.jpg"
                  alt="Pet Family"
                  className="w-full h-full object-cover transition duration-300"
                />
                <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-50 transition rounded-full"></div>
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
            to="/saddogtwo"
            className="text-4xl text-gray-400 hover:text-red-500 transition cursor-pointer"
          >
            &#8592;
          </Link>
          <Link
            to="/blog"
            className="text-4xl text-gray-400 hover:text-red-500 transition cursor-pointer"
          >
            &#8594;
          </Link>
        </div>
















      </section >
































    </div >

  )
}

export default LittleOnes