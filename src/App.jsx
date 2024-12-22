import './App.css'
import hero from './assets/hero.png'
import logo from './assets/logo.png'
import dreamhome from './assets/1stimage.png'
import san from './assets/img1.png'
import baverly from './assets/img2.png'
import Palo from './assets/img3.png'
import int1 from './assets/interior2.png'
import int2 from './assets/interior1.png'
import int3 from './assets/interior3.png'
import Sarah from './assets/Girl1.png'
import Michael from './assets/guy.png'
import Emily from './assets/Girl2.png'
import Guidance from './assets/Guidance.png'
import Support from './assets/Support.png'
import process from './assets/process.png'
import personalized from './assets/personalized.png'


import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="bg-background text-[#1E1E1E] p-8 min-h-screen">
        <header className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold"><img src={logo} alt="logo" /></div>
          <nav className="space-x-4">
            <a href="#" className="text-muted-foreground">Home</a>
            <a href="#" className="text-muted-foreground">Service</a>
            <a href="#" className="text-muted-foreground">Contact</a>
            <a href="#" className="text-secondary-foreground px-4 py-2 text-white bg-[#1E1E1E] rounded">Sign up</a>
          </nav>
        </header>

        <main className="text-center justify-center items-center flex mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
            <p className="text-muted-foreground mb-8">Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision</p>
            <button className="bg-secondary text-secondary-foreground px-6 text-white bg-[#1E1E1E] py-2 rounded">Sign up</button>
          </div>
          <div>
            <img src={hero} alt="hero" />
          </div>
        </main>
      </div>
      <div className="flex flex-col md:flex-row bg-white dark:bg-[#ffffff] rounded-lg shadow-lg overflow-hidden">
        <div className="md:w-1/2">
          <img src={dreamhome} alt="Dream Home" className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-zinc-800">We Help You To Find Your Dream Home</h2>
          <p className="mt-2 text-zinc-600">
            From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality.
          </p>
          <div className="mt-4 flex justify-center space-x-8">
            <div className="text-center">
              <span className="text-3xl font-bold text-zinc-800">8K+</span>
              <p className="text-zinc-600">Houses Available</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-zinc-800">6K+</span>
              <p className="text-zinc-600">Houses Sold</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-zinc-800">2K+</span>
              <p className="text-zinc-600">Trusted Agents</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
        <p className="text-center text-muted-foreground mb-8">Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#DDC7BB] p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <img aria-hidden="true" alt="location-pin" src={Guidance} className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold ml-2">Expert Guidance</h3>
            <p className="text-muted-foreground">Benefit from our team&apos;s seasoned expertise for a smooth buying experience.</p>
          </div>
          <div className="bg-[#DDC7BB] p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <img aria-hidden="true" alt="personalized-service" src={personalized} className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold ml-2">Personalized Service</h3>
            <p className="text-muted-foreground">Our services adapt to your unique needs, making your journey stress-free.</p>
          </div>
          <div className="bg-[#DDC7BB] p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <img aria-hidden="true" alt="transparent-process" src={process} className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold ml-2">Transparent Process</h3>
            <p className="text-muted-foreground">Stay informed with our clear and honest approach to buying your home.</p>
          </div>
          <div className="bg-[#DDC7BB] p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <img aria-hidden="true" alt="exceptional-support" src={Support} className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold ml-2">Exceptional Support</h3>
            <p className="text-muted-foreground">Providing peace of mind with our responsive and attentive customer service.</p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Our Popular Residences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card bg-[#DDC7BB] rounded-lg shadow-lg overflow-hidden">
            <img src={san} alt="San Francisco Residence" className="w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">San Francisco, California</h3>
              <div className='flex justify-center gap-5'>

              <p className="text-muted-foreground">4 Rooms</p>
              <p className="text-muted-foreground">3,500 sq ft</p>
              </div>
              <p className="text-xl font-bold">$2,500,000</p>
              <button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded">Sign up</button>
            </div>
          </div>
          <div className="bg-card bg-[#DDC7BB] rounded-lg shadow-lg overflow-hidden">
            <img src={baverly} alt="Beverly Hills Residence" className="w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Beverly Hills, California</h3>
              <div className='flex justify-center gap-5'>

              <p className="text-muted-foreground">3 Rooms</p>
              <p className="text-muted-foreground">1,500 sq ft</p>
              </div>
              <p className="text-xl font-bold">$850,000</p>
              <button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded">Sign up</button>
            </div>
          </div>
          <div className="bg-card bg-[#DDC7BB] rounded-lg shadow-lg overflow-hidden">
            <img src={Palo} alt="Palo Alto Residence" className="w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Palo Alto, California</h3>
              <div className='flex justify-center gap-5'>

              <p className="text-muted-foreground">6 Rooms</p>
              <p className="text-muted-foreground">4,000 sq ft</p>
              </div>
              <p className="text-xl font-bold">$3,700,000</p>
              <button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded">Sign up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FEF7F2] p-8">
        <h2 className="text-3xl font-bold text-center mb-6">What People Say About Dwello</h2>
        <div className="flex justify-center space-x-4">
          <div className="bg-[#DDC7BB] rounded-lg shadow-lg p-4 max-w-xs">
            <img src={int1} alt="Room" className="rounded-lg mb-4" />
            <div className='flex justify-between items-center pl-5 pr-5'>
              <img src={Sarah} alt="person1" className='rounded-full' />
              <div>
              <h3 className="font-semibold">Sarah Nguyen</h3>
              <p className="text-sm text-zinc-500">San Francisco</p>
              </div>
              <p className="text-lg font-bold">4.5</p>
            </div>
            <p className="text-zinc-700 mt-2">
              Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are
              unmatched.
            </p>
          </div>
          <div className="bg-[#DDC7BB] rounded-lg shadow-lg p-4 max-w-xs">
            <img src={int2} alt="Room" className="rounded-lg mb-4" />
            <div className='flex justify-between items-center pl-5 pr-5'>
              <img src={Michael} alt="person2" className='rounded-full' />
              <div>
              <h3 className="font-semibold">Michael Rodriguez</h3>
              <p className="text-sm text-zinc-500">San Diego</p>
              </div>
              <p className="text-lg font-bold">4.5</p>
            </div>
            <p className="text-zinc-700 mt-2">
              I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!
            </p>
          </div>
          <div className="bg-[#DDC7BB] rounded-lg shadow-lg p-4 max-w-xs">
            <img src={int3} alt="Room" className="rounded-lg mb-4" />
            <div className='flex justify-between items-center pl-5 pr-5'>
              <img src={Emily} alt="person3" className='rounded-full' />
              <div>
              <h3 className="font-semibold">Emily Johnson</h3>
              <p className="text-sm text-zinc-500">Los Angeles</p>  
              </div>
              <p className="text-lg font-bold">5.0</p>
            </div>
            <p className="text-zinc-700 mt-2">
              Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I could not be happier with my new home!
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
