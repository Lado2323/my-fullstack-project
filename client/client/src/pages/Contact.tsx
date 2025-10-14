import { MapPin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Clock3 } from 'lucide-react';
import { Phone } from 'lucide-react';
import { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';










const Contact = () => {



  const infos = [
    {
      id: 1,
      text: 'DECEMBER 2, 2021',
      img: "/images/cat.jpg",
      description: "Gray cat",
      link: "/graycat"





    },
    {
      id: 2,
      text: 'DECEMBER 2, 2021',
      img: "/images/catndog.jpg",
      description: "Playing together",
      link: "/playtogether"





    },
    {
      id: 3,
      text: 'DECEMBER 2, 2021',
      img: "/images/litlledog.webp",
      description: "Sad dog",
      link: "/saddog"





    },
    {
      id: 4,
      text: 'DECEMBER 2, 2021',
      img: "/images/dogstick.jpg",
      description: "Dog with stick",
      link: "/dogstick"





    },
  ]







































  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const navigate = useNavigate()



  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    },
    []

  )



  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setLoading(true)




      try {
        // TODO: Replace with actual authentication logic
        console.log("Logging in with:", formData)

        // Simulate a fake delay for demonstration
        await new Promise(resolve => setTimeout(resolve, 1000))
        setFormData({
          name: '',
          email: '',
          message: ''
        })

        // Redirect or handle login success
        // e.g., navigate("/dashboard")
      } catch (err) {
        console.error("Login failed:", err)
        setError("Invalid email or password.")
      } finally {
        setLoading(false)
      }
    },
    [formData]

  )






















  return (
    <div>
      <section className="flex flex-col justify-center items-center text-center bg-[url('/background-pr.jpeg')]    ">
        {/* LEFT COLUMN */}
        <div className="max-w-2xl items-center mt-16">
          <h1 className="text-sm mt-6 text-gray-400 font-bold  mb-6">
            GET IN TOUCH WITH US
          </h1>



          <p className="text-6xl font-bold mb-6 text-gray-200 ">
            Contact Us
          </p>

        </div>
        <div className="flex   gap-32 pt-32 pb-16">

          <div className="text-white flex flex-col items-center gap-4  ">
            <MapPin size={40} color="#fafafa" />
            <h1 className="text-xl font-bold">Our office</h1>
            <p className="text-md ">304 North Cardinal St.<br />
              Dorchester Center</p>



          </div>



          <div className="text-white flex flex-col items-center gap-4">
            <Mail size={40} color="#fafafa" />
            <h1 className="text-xl font-bold">Email Address</h1>
            <p className="text-md ">info@company.com<br />
              contact@company.com
            </p>





          </div>

          <div className="text-white flex flex-col items-center gap-4">
            <Clock3 size={40} color="#fafafa" />
            <h1 className="text-xl font-bold">Open Hours</h1>
            <p className="text-md ">Monday-Saturday 8 am – 6pm<br />
              Sunday 11am – 4pm
            </p>





          </div>

          <div className="text-white flex flex-col items-center gap-4">
            <Phone size={40} color="#fafafa" />
            <h1 className="text-xl font-bold">Phone Number</h1>
            <p className="text-md ">(+88) 553 3212<br />
              (+88) 553 3213
            </p>





          </div>


















        </div>




      </section>
      <section className=" mt-32 ">
       <div className="flex flex-col lg:flex-row justify-center items-center gap-16 px-10">
      <div className="flex justify-center">
        <img src="/images/dog.jpg" alt="Contact Dog" className="w-full max-w-2xl rounded-lg shadow-lg" />
      </div>

             <form className="space-y-6 w-full max-w-md" onSubmit={handleSubmit}>
        <h1 className="color text-4xl font-bold">Let’s Keep In Touch</h1>
        <p className="text-gray-400">
          In consequat, quam id sodales hendrerit, eros mi lacinia risus neque tristique augue proin tempus urna congue elementum.
        </p>

        <Input
          placeholder="Name:"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          placeholder="Enter your email:"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          placeholder="Send Message:"
          name="message"
          type="text"
          value={formData.message}
          onChange={handleChange}
        />

        <Button
          type="submit"
          className="w-full text-lg"
          size="lg"
          variant="primary"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>

















        </div>
     














      </section>

      <section className="py-16">
        <div className=" mx-auto px-8">
          <span className="text-gray-300 font-bold text-sm md:text-lg">WHAT TO READ</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-10">Popular Info About Pets</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {infos.map((info) => (
              <div key={info.id} className="flex flex-col items-center space-y-4">
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

     
     
    </div>



















    

  )
}

export default Contact