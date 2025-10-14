

const Blog = () => {



   const infos = [
    {
      id: 1,
      text: 'DECEMBER 2, 2021',
      img: "/images/smilingdog.jpg",
      description: "Smiling dog",
      link: "smilingdog"





    },
    {
      id: 2,
      text: 'DECEMBER 2, 2021',
      img: "/images/cutedc.jpg",
      description: "Dog and cat's family",
      link: "/dogandcatfamily"





    },
    {
      id: 3,
      text: 'DECEMBER 2, 2021',
      img: "/images/cute.jpg",
      description: "Little pets",
      link: "/littlepets"





    },
    {
      id: 4,
      text: 'DECEMBER 2, 2021',
      img: "/images/leopardcat.jpg",
      description: "Leopard cat",
      link: "/leopardcat"





    },
      {
      id: 5,
      text: 'DECEMBER 2, 2021',
      img: "/images/cat.jpg",
      description: "Gray cat",
      link: "/graycat"





    },
    {
      id: 6,
      text: 'DECEMBER 2, 2021',
      img: "/images/catndog.jpg",
      description: "Playing together",
      link: "/playtogether"





    },
    {
      id: 7,
      text: 'DECEMBER 2, 2021',
      img: "/images/litlledog.webp",
      description: "Sad dog",
      link: "/saddog"





    },
    {
      id: 8,
      text: 'DECEMBER 2, 2021',
      img: "/images/dogstick.jpg",
      description: "Dog with stick",
      link: "/dogstick"





    },
    {
      id: 9,
      text: 'DECEMBER 2, 2021',
      img: "/images/petlove.jpg",
      description: "Little pets together",
      link: "/togethercatdog"





    },
    {
      id: 10,
      text: 'DECEMBER 2, 2021',
      img: "/images/catonbed.jpg",
      description: "Cosy cat",
      link: "/cutecat"





    },
    {
      id: 11,
      text: 'DECEMBER 2, 2021',
      img: "/images/saddog.jpg",
      description: "Sad dog",
      link: "/saddogtwo"





    },
    {
      id: 12,
      text: 'DECEMBER 2, 2021',
      img: "/images/last.jpg",
      description: "Little ones",
      link: "/littleones"





    },
  ]






















  return (
   <div>
  {/* HERO SECTION */}
  <section className="flex justify-center items-center bg-[url('/background-pr.jpeg')] bg-cover bg-center">
    <div className="flex justify-center py-24 sm:py-32 items-center px-4">
      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-gray-200 text-center">
        Blog
      </p>
    </div>
  </section>

  {/* BLOG SECTION */}
  <section className="mt-12 sm:mt-16 px-4 sm:px-8">
    <div className="text-center">
      <p className="text-3xl sm:text-4xl md:text-5xl color font-bold italic">
        Popular Info To Read
      </p>
    </div>

    {/* GRID */}
    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      w-full 
      mt-12 
      sm:mt-16 
      gap-6 
      sm:gap-10 
      p-4
    ">
      {infos.map((info) => (
        <div key={info.id} className="flex flex-col items-center space-y-4">
          {/* Image box */}
          <div
            className="
              relative 
              overflow-hidden 
              flex 
              flex-col 
              items-center 
              justify-center  
              h-56 
              sm:h-64 
              w-full 
              hover:shadow-2xl 
              transition 
              duration-600 
              ease-in-out 
              cursor-pointer
            "
          >
            <a href={info.link} target="_blank" rel="noopener noreferrer">
              <img
                src={info.img}
                alt={info.text}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </a>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-2 sm:gap-3 items-center text-center">
            <h3 className="text-gray-300 color font-serif text-base sm:text-lg font-bold text-center">
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

export default Blog