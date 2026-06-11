import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjgdedjg");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 text-center"
      >
        <h2 className="text-5xl font-bold mb-4">
          Thank You!
        </h2>

        <p className="text-lg text-gray-600">
          Your message has been sent successfully.
        </p>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Need medical assistance? Want to book an appointment?
            Our healthcare team is available 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-4xl font-bold mb-6 text-blue-600">
              Let's Talk
            </h3>

            <p className="text-gray-600 mb-8">
              Reach out anytime and our team will respond quickly.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">
                  qasmut2006@gmail.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">
                  08027187984
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600">
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow-lg"
          >
            <div className="mb-6">
              <label className="block mb-2 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                className="w-full border rounded-xl p-4"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                className="w-full border rounded-xl p-4"
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold">
                Message
              </label>

              <textarea
                name="message"
                rows={6}
                required
                className="w-full border rounded-xl p-4"
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-blue-600 text-white py-4 rounded-xl"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;