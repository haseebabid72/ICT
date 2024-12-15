import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div class="bg-background text-[#1E1E1E] p-8 min-h-screen">
        <header class="flex justify-between items-center mb-8">
          <div class="text-2xl font-bold">Dwello</div>
          <nav class="space-x-4">
            <a href="#" class="text-muted-foreground">Home</a>
            <a href="#" class="text-muted-foreground">Service</a>
            <a href="#" class="text-muted-foreground">Agents</a>
            <a href="#" class="text-muted-foreground">Contact</a>
            <a href="#" class="text-secondary-foreground px-4 py-2 text-white bg-[#1E1E1E] rounded">Sign up</a>
          </nav>
        </header>

        <main class="text-center justify-center items-center flex mb-12">
          <div>
            <h1 class="text-4xl font-bold mb-4">Find Your Dream Home</h1>
            <p class="text-muted-foreground mb-8">Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision</p>
            <button class="bg-secondary text-secondary-foreground px-6 text-white bg-[#1E1E1E] py-2 rounded">Sign up</button>
          </div>
          <div>
            <img src="https://pics.craiyon.com/2024-04-22/d25WiRyTTnazlHfrKYp2HA.webp" alt="" />
          </div>
        </main>

        <div class="flex bg-[#DDC7BB] p-8 justify-center space-x-4 mb-8">
          <select class="border border-border rounded p-2">
            <option>Location</option>
            <option>City 1</option>
            <option>City 2</option>
          </select>
          <select class="border border-border rounded p-2">
            <option>Type</option>
            <option>Apartment</option>
            <option>House</option>
          </select>
          <select class="border border-border rounded p-2">
            <option>Price Range</option>
            <option>$100,000 - $200,000</option>
            <option>$200,000 - $300,000</option>
          </select>
          <button className='text-white bg-[#1E1E1E] px-5 py-2 rounded-md'>Search</button>
        </div>
      </div>
      <div class="flex flex-col md:flex-row bg-white dark:bg-[#1E1E1E] rounded-lg shadow-lg overflow-hidden">
        <div class="md:w-1/2">
          <img src="https://placehold.co/600x400" alt="Dream Home" class="w-full h-full object-cover" />
        </div>
        <div class="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 class="text-2xl font-bold text-zinc-800 dark:text-white">We Help You To Find Your Dream Home</h2>
          <p class="mt-2 text-zinc-600 dark:text-zinc-300">
            From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality.
          </p>
          <div class="mt-4 flex space-x-8">
            <div class="text-center">
              <span class="text-3xl font-bold text-zinc-800 dark:text-white">8K+</span>
              <p class="text-zinc-600 dark:text-zinc-300">Houses Available</p>
            </div>
            <div class="text-center">
              <span class="text-3xl font-bold text-zinc-800 dark:text-white">6K+</span>
              <p class="text-zinc-600 dark:text-zinc-300">Houses Sold</p>
            </div>
            <div class="text-center">
              <span class="text-3xl font-bold text-zinc-800 dark:text-white">2K+</span>
              <p class="text-zinc-600 dark:text-zinc-300">Trusted Agents</p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-4 py-10">
        <h2 class="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
        <p class="text-center text-muted-foreground mb-8">Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-[#DDC7BB] p-6 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <img aria-hidden="true" alt="location-pin" src="https://openui.fly.dev/openui/24x24.svg?text=📍" class="w-10 h-10" />
              <h3 class="text-xl font-semibold ml-2">Expert Guidance</h3>
            </div>
            <p class="text-muted-foreground">Benefit from our team's seasoned expertise for a smooth buying experience.</p>
          </div>
          <div class="bg-[#DDC7BB] p-6 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <img aria-hidden="true" alt="personalized-service" src="https://openui.fly.dev/openui/24x24.svg?text=👤" class="w-10 h-10" />
              <h3 class="text-xl font-semibold ml-2">Personalized Service</h3>
            </div>
            <p class="text-muted-foreground">Our services adapt to your unique needs, making your journey stress-free.</p>
          </div>
          <div class="bg-[#DDC7BB] p-6 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <img aria-hidden="true" alt="transparent-process" src="https://openui.fly.dev/openui/24x24.svg?text=📋" class="w-10 h-10" />
              <h3 class="text-xl font-semibold ml-2">Transparent Process</h3>
            </div>
            <p class="text-muted-foreground">Stay informed with our clear and honest approach to buying your home.</p>
          </div>
          <div class="bg-[#DDC7BB] p-6 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <img aria-hidden="true" alt="exceptional-support" src="https://openui.fly.dev/openui/24x24.svg?text=🤝" class="w-10 h-10" />
              <h3 class="text-xl font-semibold ml-2">Exceptional Support</h3>
            </div>
            <p class="text-muted-foreground">Providing peace of mind with our responsive and attentive customer service.</p>
          </div>
        </div>
      </div>
      <div class="p-8">
        <h2 class="text-2xl font-bold text-center mb-6">Our Popular Residences</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-card rounded-lg shadow-lg overflow-hidden">
            <img src="https://placehold.co/300x200" alt="San Francisco Residence" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-semibold">San Francisco, California</h3>
              <p class="text-muted-foreground">4 Rooms</p>
              <p class="text-muted-foreground">3,500 sq ft</p>
              <p class="text-xl font-bold">$2,500,000</p>
              <button class="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded">Sign up</button>
            </div>
          </div>
          <div class="bg-card rounded-lg shadow-lg overflow-hidden">
            <img src="https://placehold.co/300x200" alt="Beverly Hills Residence" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-semibold">Beverly Hills, California</h3>
              <p class="text-muted-foreground">3 Rooms</p>
              <p class="text-muted-foreground">1,500 sq ft</p>
              <p class="text-xl font-bold">$850,000</p>
              <button class="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded">Sign up</button>
            </div>
          </div>
          <div class="bg-card rounded-lg shadow-lg overflow-hidden">
            <img src="https://placehold.co/300x200" alt="Palo Alto Residence" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-lg font-semibold">Palo Alto, California</h3>
              <p class="text-muted-foreground">6 Rooms</p>
              <p class="text-muted-foreground">4,000 sq ft</p>
              <p class="text-xl font-bold">$3,700,000</p>
              <button class="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded">Sign up</button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#FEF7F2] p-8">
        <h2 class="text-3xl font-bold text-center mb-6">What People Say About Dwello</h2>
        <div class="flex justify-center space-x-4">
          <div class="bg-white rounded-lg shadow-lg p-4 max-w-xs">
            <img src="https://placehold.co/300x200" alt="Room" class="rounded-lg mb-4" />
            <h3 class="font-semibold">Sarah Nguyen</h3>
            <p class="text-sm text-zinc-500">San Francisco</p>
            <p class="text-lg font-bold">5.0</p>
            <p class="text-zinc-700 mt-2">
              Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are
              unmatched.
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-4 max-w-xs">
            <img src="https://placehold.co/300x200" alt="Room" class="rounded-lg mb-4" />
            <h3 class="font-semibold">Michael Rodriguez</h3>
            <p class="text-sm text-zinc-500">San Diego</p>
            <p class="text-lg font-bold">4.5</p>
            <p class="text-zinc-700 mt-2">
              I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-4 max-w-xs">
            <img src="https://placehold.co/300x200" alt="Room" class="rounded-lg mb-4" />
            <h3 class="font-semibold">Emily Johnson</h3>
            <p class="text-sm text-zinc-500">Los Angeles</p>
            <p class="text-lg font-bold">5.0</p>
            <p class="text-zinc-700 mt-2">
              Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!
            </p>
          </div>
        </div>
        <div class="flex justify-center mt-6">
          <button class="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-full mx-2">←</button>
          <button class="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-full mx-2">→</button>
        </div>
      </div>
      <div class="text-center py-10">
        <h2 class="text-2xl font-bold text-foreground">Do You Have Any Questions?</h2>
        <p class="text-lg text-muted-foreground">Get Help From Us</p>
        <div class="flex flex-col md:flex-row justify-center items-center mt-4 space-x-0 md:space-x-4">
          <a href="#" class="text-secondary hover:underline">Chat live with our support team</a>
          <a href="#" class="text-secondary hover:underline">Browse our FAQ</a>
        </div>
        <div class="mt-6">
          <input type="email" placeholder="Enter your email address..." class="border border-border rounded-lg p-2 w-full md:w-1/3" />
          <button class="bg-secondary text-white hover:bg-secondary/80 rounded-lg bg-[#1E1E1E] px-4 py-2 ml-2">Submit</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
