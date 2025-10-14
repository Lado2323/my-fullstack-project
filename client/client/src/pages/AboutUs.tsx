import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button";
import { Dog } from 'lucide-react';
import { PawPrint } from 'lucide-react';
import { Heart } from 'lucide-react';



const AboutUs = () => {


  const infos = [
   {
      id: 1,
      text: 'DECEMBER 2, 2021',
      img: "/images/petlove.jpg",
      description: "Little pets together",
      link: "/togethercatdog"





    },
    {
      id: 2,
      text: 'DECEMBER 2, 2021',
      img: "/images/catonbed.jpg",
      description: "Cosy cat",
      link: "/cutecat"





    },
    {
      id: 3,
      text: 'DECEMBER 2, 2021',
      img: "/images/saddog.jpg",
      description: "Sad dog",
      link: "/saddogtwo"





    },
    {
      id: 4,
      text: 'DECEMBER 2, 2021',
      img: "/images/last.jpg",
      description: "Cute little ones",
      link: "/littleones"





    },
  ]

























  return (
    <div>
      {/* HERO SECTION */}
      <section className="flex flex-col justify-center items-center text-center bg-[url('/background-pr.jpeg')] bg-cover bg-center px-4 md:px-8">
        {/* LEFT COLUMN */}
        <div className="max-w-2xl items-center mt-16">
          <h1 className="text-xs sm:text-sm mt-6 text-gray-400 font-bold mb-6">
            WE HAVE THE BEST PET PRODUCTS
          </h1>

          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-200 leading-tight">
            About Us
          </p>
        </div>

        <div className="w-full flex justify-center">
          <img
            src="https://startersites.io/blocksy/petsy/wp-content/uploads/2021/12/about-us-hero-pets_optimized-1536x531.webp"
            className="h-31 sm:h-56 md:h-64 mt-16 sm:mt-24 object-contain"
            alt="About Us"
          />
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-12 sm:py-20">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold color leading-relaxed text-center md:text-left">
              We are passionate about <br /> taking care of your animals
            </h2>

            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-base sm:text-lg w-28 sm:w-32 h-12 sm:h-14"
              variant={"primary"}
            >
              <Link to="/blog">Blog</Link>
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row justify-center gap-8 md:gap-16 py-16 sm:py-24">
            <div>
              <p className="leading-relaxed text-sm sm:text-base text-gray-600">
                In consequat, quam id sodales hendrerit, eros mi molestie leo,
                nec lacinia risus neque tristique augue. Proin tempus urna vel
                congue elementum. Vestibulum euismod accumsan dui.
              </p>
            </div>

            <div>
              <p className="leading-relaxed text-sm sm:text-base text-gray-600">
                In consequat, quam id sodales hendrerit, eros mi molestie leo,
                nec lacinia risus neque tristique augue. Proin tempus urna vel
                congue elementum. Vestibulum euismod accumsan dui.
              </p>
            </div>

            <div>
              <p className="leading-relaxed text-sm sm:text-base text-gray-600">
                In consequat, quam id sodales hendrerit, eros mi molestie leo,
                nec lacinia risus neque tristique augue. Proin tempus urna vel
                congue elementum. Vestibulum euismod accumsan dui.
              </p>
            </div>
          </div>
        </div>

        {/* STATS + BOXES */}
        <div className="bg-gray-100 rounded-lg px-4 sm:px-8 md:px-16 py-10 mt-8">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8">
            <div className="font-bold color">
              <span className="text-4xl sm:text-5xl md:text-6xl">10+</span>
              <p className="text-lg sm:text-2xl mt-2">Years in business</p>
            </div>
            <div className="font-bold color">
              <span className="text-4xl sm:text-5xl md:text-6xl">5K+</span>
              <p className="text-lg sm:text-2xl mt-2">Happy pets</p>
            </div>
            <div className="font-bold color">
              <span className="text-4xl sm:text-5xl md:text-6xl">55</span>
              <p className="text-lg sm:text-2xl mt-2">Employees</p>
            </div>
            <div className="font-bold color">
              <span className="text-4xl sm:text-5xl md:text-6xl">20K+</span>
              <p className="text-lg sm:text-2xl mt-2">Opening hours</p>
            </div>
          </div>

          {/* Boxes */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mt-8 ">
            <div className="box1 flex flex-col justify-center text-center items-center bggg p-6 rounded-2xl">
              <Dog size={60} color="#fafafa" />
              <h2 className="text-white text-2xl font-bold mt-4">
                Leading Way
              </h2>
              <p className="text-white text-sm sm:text-base mt-2">
                Fusce at nisi eget dolor rhoncus facilisis tempor.
              </p>
            </div>

            <div className="box1 flex flex-col justify-center text-center items-center bggg p-6 rounded-2xl">
              <PawPrint size={60} color="#fafafa" />
              <h2 className="text-white text-2xl font-bold mt-4">
                Our Management
              </h2>
              <p className="text-white text-sm sm:text-base mt-2">
                Fusce at nisi eget dolor rhoncus facilisis venenatis.
              </p>
            </div>

            <div className="box1 flex flex-col justify-center text-center items-center bggg p-6 rounded-2xl">
              <Heart size={60} color="#fafafa" />
              <h2 className="text-white text-2xl font-bold mt-4">
                Petsy Love
              </h2>
              <p className="text-white text-sm sm:text-base mt-2">
                Fusce at nisi eget dolor rhoncus facilisis venenatis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR INFO SECTION */}
      <section className="mt-24 px-4">
        <div className="px-4">
          <span className="text-gray-300 font-bold text-sm sm:text-base md:text-lg">
            WHAT TO READ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 mb-8">
            Popular Info About Pets
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-6 sm:gap-8 p-4">
          {infos.map((info) => (
            <div
              key={info.id}
              className="flex flex-col items-center space-y-4"
            >
              {/* Box */}
              <div className="relative overflow-hidden flex flex-col items-center justify-center h-56 sm:h-64 w-full hover:shadow-2xl transition duration-500 ease-in-out cursor-pointer">
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={info.img}
                    alt={info.text}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </a>
              </div>

              <div className="flex flex-col gap-2 items-center text-center">
                <h3 className="text-gray-300 color font-serif text-base sm:text-lg font-bold">
                  {info.description}
                </h3>
                <p className="text-sm sm:text-lg font-bold text-gray-400">
                  {info.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutUs