const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">

        <div>
          <h2 className="text-5xl font-bold text-blue-600">50+</h2>
          <p className="text-gray-600 mt-2">Patients Treated</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-blue-600">50+</h2>
          <p className="text-gray-600 mt-2">Medical Expert</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-blue-600">150+</h2>
          <p className="text-gray-600 mt-2">Earners</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-blue-600">2+</h2>
          <p className="text-gray-600 mt-2">Years Experience</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;