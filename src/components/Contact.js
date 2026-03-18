import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#F8FAFC] text-[#333333] py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#1E3A8A]">
          Let’s Connect
        </h2>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-7">
          Whether you are looking to design, build, or improve a website, I’d
          be happy to discuss your project and how I can support it with clear,
          user-friendly digital solutions.
        </p>

        <form
          action="https://formspree.io/f/mbljewyj"
          method="POST"
          className="space-y-6 text-left bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
        >
          <div>
            <label htmlFor="name" className="block font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#1E3A8A] text-white font-semibold rounded-lg hover:bg-[#163172] transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-sm text-gray-600">
          Or email me directly at{" "}
          <a
            href="mailto:ghiwa.khoder@hotmail.com"
            className="text-[#1E3A8A] font-semibold hover:underline"
          >
            ghiwa.khoder@hotmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;