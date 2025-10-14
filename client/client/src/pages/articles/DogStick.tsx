
import { Link } from 'react-router-dom';

const DogStick = () => {


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



          <p className="text-7xl font-bold mb-6 p-16 text-gray-200 italic  leading-tight">
            Dog With Stick
          </p>





        </div>
      </section>

      <section className="px-8 md:px-16 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-center items-start">

          {/* LEFT SIDE */}
          <div className="flex-1 max-w-2xl">
            <img
              src="/images/dogstick.jpg"
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
          Dogs that love playing with sticks are full of energy, curiosity, and a simple joy that never fails to bring a smile to anyone watching them. The thrill of chasing, fetching, and chewing on sticks taps into their natural instincts, combining play with exercise and mental stimulation. For many dogs, a stick becomes more than just an object—it’s a source of excitement, a reward, and a way to bond with their human companions.

          This playful behavior showcases their intelligence and adaptability. Dogs quickly learn how to retrieve a stick, bring it back, or even hide it for later, showing problem-solving skills and memory. The act of playing with sticks also encourages coordination, agility, and endurance, helping them stay physically healthy while having fun. Beyond the physical benefits, this activity strengthens the bond between dog and owner, as the shared game creates mutual trust, communication, and companionship.

          Many dogs develop a unique personality around their stick-loving habits. Some prefer tiny twigs they can carry easily, while others enjoy larger branches that challenge their strength and determination. Observing how they choose, chase, and interact with sticks can reveal their playful spirit, determination, and sheer enthusiasm for life.




        </p>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex justify-between mt-32 px-6 md:px-16 lg:px-32">
          {/* Previous Post */}
          <div className="flex justify-center items-center text-center gap-4">
            <Link to="/saddog" className="flex items-center gap-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden group">
                {/* Image */}
                <img
                  src="/images/litlledog.webp"
                  alt="Sad Dog"
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
                <p className="color font-bold">Sad Dog</p>
              </div>
            </Link>
          </div>

          {/* Next Post */}
          <div className="flex justify-center items-center text-center gap-4">
            <Link to="/togethercatdog" className="flex items-center gap-4">
              <div className="flex flex-col gap-4 mr-4 text-right">
                <h1 className="text-xl text-gray-500">Next Post</h1>
                <p className="color font-bold">Little Cat and Dog</p>
              </div>

              <div className="relative w-32 h-32 rounded-full overflow-hidden group">
                {/* Image */}
                <img
                  src="/images/petlove.jpg"
                  alt="Little Cat and Dog"
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
            to="/saddog"
            className="text-4xl text-gray-400 hover:text-red-500 transition cursor-pointer"
          >
            &#8592;
          </Link>
          <Link
            to="/togethercatdog"
            className="text-4xl text-gray-400 hover:text-red-500 transition cursor-pointer"
          >
            &#8594;
          </Link>
        </div>





















      </section >
































    </div >

  )
}

export default DogStick
