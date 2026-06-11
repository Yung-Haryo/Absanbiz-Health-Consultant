const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 px-6 mt-20">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Logo + About */}
        <div>
          <h1 className="text-2xl font-bold mb-4">HealthCare</h1>
          <p className="text-blue-100">
            Providing trusted medical services with expert doctors and modern healthcare solutions for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">You can reach out to us at</h2>
          <ul className="space-y-2 text-blue-100">
            <li className="hover:text-white cursor-pointer">Facebook</li>
            <li className="hover:text-white cursor-pointer">Twitter</li>
            <li className="hover:text-white cursor-pointer">Instagram</li>
            <li className="hover:text-white cursor-pointer">Tiktok</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-blue-100">📍 Lagos, Nigeria</p>
          <p className="text-blue-100">📞 +234 8027187984</p>
          <p className="text-blue-100">✉ qasmut2006@gmail.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-blue-200 mt-10 border-t border-blue-700 pt-6">
        © {new Date().getFullYear()} HealthCare. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;