
import { Link } from 'react-router-dom';

const CuteCat = () => {
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
            Cosy Cat
          </p>





        </div>
      </section>

      <section className="px-8 md:px-16 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-center items-start">

          {/* LEFT SIDE */}
          <div className="flex-1 max-w-2xl">
            <img
              src="/images/catonbed.jpg"
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
          Cats have a natural affinity for comfort, and there’s nothing quite as endearing as watching a cat curl up and rest on a bed. Whether it’s a sunny patch of a blanket, a soft pillow, or the cozy folds of a quilt, cats instinctively seek out the most inviting and warm places to relax. Their bodies mold effortlessly to the contours of the bedding, showcasing their flexibility and the elegance of their movements even in stillness.

          When a cat rests on a bed, it’s not just about comfort—it’s also about safety and trust. Beds are often associated with their human companions, and choosing to lounge there signifies a sense of security and a bond with the household. Cats may stretch out fully, tuck their paws neatly under their bodies, or curl into a tight ball, each position reflecting a combination of relaxation, vigilance, and contentment. Their gentle purring, occasional twitching of the tail, or slow blinks further communicate a deep state of ease and happiness.

          Watching a cat enjoy its rest on a bed brings a sense of calm to the environment. Their presence transforms a simple piece of furniture into a sanctuary of warmth and tranquility. For cat owners, these moments are an invitation to slow down and appreciate the quiet joys of companionship, as the cat’s serenity often becomes contagious. In every soft sigh, every stretch, and every cozy nestling into blankets, a resting cat reminds us of the simple pleasures of comfort, safety, and the peaceful moments that make a home feel truly alive.



        </p>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex justify-between mt-32 px-6 md:px-16 lg:px-32">
          {/* Previous Post */}
          <div className="flex justify-center items-center text-center gap-4">
            <Link to="/togethercatdog" className="flex items-center gap-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden group">
                <img
                  src="/images/petlove.jpg"
                  alt="Play Together"
                  className="w-full h-full object-cover transition duration-300"
                />
                <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-50 transition rounded-full"></div>
                <span className="absolute left-2 top-1/2 -translate-y-1/2 p-10 text-white text-2xl opacity-0 group-hover:opacity-100 transition cursor-pointer">
                  &#8592;
                </span>
              </div>

              <div className="flex flex-col gap-4 ml-4 text-left">
                <h1 className="text-2xl text-gray-500">Previous Post</h1>
                <p className="color font-bold">Play Together</p>
              </div>
            </Link>
          </div>

          {/* Next Post */}
          <div className="flex justify-center items-center text-center gap-4">
            <Link to="/saddogtwo" className="flex items-center gap-4">
              <div className="flex flex-col gap-4 mr-4 text-right">
                <h1 className="text-xl text-gray-500">Next Post</h1>
                <p className="color font-bold">Sad Dog</p>
              </div>

              <div className="relative w-32 h-32 rounded-full overflow-hidden group">
                <img
                  src="/images/saddog.jpg"
                  alt="Sad Dog"
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
            to="/togethercatdog"
            className="text-4xl text-gray-400 hover:text-red-500 transition cursor-pointer"
          >
            &#8592;
          </Link>
          <Link
            to="/saddogtwo"
            className="text-4xl text-gray-400 hover:text-red-500 transition cursor-pointer"
          >
            &#8594;
          </Link>
        </div>



















      </section >
































    </div >

  )
}

export default CuteCat