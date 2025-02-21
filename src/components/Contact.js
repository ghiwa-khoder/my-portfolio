import React from 'react';

const Contact = () => {
  return (
    <section 
      id="contact"
      className="bg-[#F3F4F6] text-[#333333] py-12 px-6"
    >
      <h2 className="text-4xl font-semibold text-center mb-12 text-[#1E3A8A]">Contact Me</h2>
      <div className="max-w-3xl mx-auto">
        <form
          action="https://formspree.io/f/mbljewyj" // Replace with your Formspree ID
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#1E3A8A] text-offWhite font-semibold rounded-lg hover:bg-[#F59E0B] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;