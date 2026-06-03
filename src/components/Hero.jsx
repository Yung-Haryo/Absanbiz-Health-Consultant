import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-linear-to-br from-blue-50 via-white to-purple-100"
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
      >
        Advanced Healthcare You Can Trust
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 max-w-2xl mb-8 text-lg"
      >
        Modern healthcare provider basically based on nature, through Kedi and Jinja products internationallycd
      . Our mission is to
        ensure every patient gets fast, reliable, and affordable care. And can also earn money by selling our products.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-4"
      >
        <button
          onClick={scrollToContact}
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Book Appointment
        </button>

        <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition">
          Learn More
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;