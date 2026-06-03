import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl text-blue-600">
        ABSANBIZ Health Consultant
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        <button
          onClick={() => scrollToSection("hero")}
          className="hover:text-blue-600 cursor-pointer"
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("services")}
          className="hover:text-blue-600 cursor-pointer"
        >
          Products
        </button>

        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-blue-600 cursor-pointer"
        >
          About
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-blue-600 cursor-pointer"
        >
          Contact
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-6 shadow-md md:hidden">
          <button onClick={() => scrollToSection("hero")}>Home</button>
          <button onClick={() => scrollToSection("services")}>Products</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;