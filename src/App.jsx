import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Stats from "./components/Stats";

import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth bg-linear-to-br from-blue-50 via-white to-purple-50">

     

      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />
        <Stats />
        <Services />
        
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

    </div>
  );
}

export default App;