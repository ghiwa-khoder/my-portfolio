import React from "react";

/* =====================================================
   SERVICES
===================================================== */

const services = [
  "Creative Websites",
  "WordPress Development",
  "Responsive Design",
  "Bilingual Websites",
  "UI/UX",
  "Website Optimization",
];

/* =====================================================
   CONTACT COMPONENT
===================================================== */

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        bg-[#081426]
        px-6 py-24
        text-white
        md:py-32
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-32 top-12
          h-96 w-96
          rounded-full
          bg-[#C6F36B]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADER */}

        <div className="mb-12 border-b border-white/15 pb-8">

          <p
            className="
              mb-4 text-xs
              font-bold uppercase
              tracking-[.28em]
              text-[#C6F36B]
            "
          >
            03 / GET IN TOUCH
          </p>

          <h2
            className="
              max-w-4xl
              text-5xl font-black
              uppercase
              leading-[.98]
              tracking-[-.055em]
              md:text-7xl
            "
          >
            HAVE AN IDEA?
            <br />

            <span className="text-[#C6F36B]">
              LET'S BUILD IT
            </span>

            <span className="text-[#FF914D]">
              .
            </span>
          </h2>
        </div>

        {/* MAIN CONTENT */}

        <div
          className="
            grid gap-12
            lg:grid-cols-[.43fr_.57fr]
            lg:gap-16
          "
        >
          {/* LEFT CONTENT */}

          <div className="flex flex-col justify-between">

            <div>

              {/* INTRODUCTION */}

              <p
                className="
                  max-w-md
                  text-base leading-8
                  text-white/65
                "
              >
                Whether you're launching a new website,
                refreshing an existing experience,
                or exploring a creative digital idea,
                I'd love to hear about it.
              </p>

              {/* SERVICES */}

              <div className="mt-8 flex flex-wrap gap-2">

                {services.map((service) => (
                  <span
                    key={service}
                    className="
                      rounded-full
                      border border-white/20
                      px-3 py-2
                      text-xs text-white/75
                    "
                  >
                    {service}
                  </span>
                ))}

              </div>

              {/* DIRECT EMAIL */}

              <div className="mt-12 border-t border-white/15 pt-7">

                <p
                  className="
                    mb-3 text-xs
                    font-bold uppercase
                    tracking-[.2em]
                    text-[#FF914D]
                  "
                >
                  EMAIL ME DIRECTLY
                </p>

                <a
                  href="mailto:ghiwa.khoder@hotmail.com"
                  className="
                    break-all
                    text-lg font-bold
                    transition-colors
                    hover:text-[#C6F36B]
                    sm:text-xl
                  "
                >
                  ghiwa.khoder@hotmail.com ↗
                </a>

              </div>
            </div>

            {/* MASAR INTERACTIVE CARD */}

            <div
              className="
                mt-12
                rounded-2xl
                border border-[#C6F36B]/25
                bg-[#C6F36B]/5
                p-5
              "
            >
              <p
                className="
                  text-xs font-bold
                  uppercase tracking-[.2em]
                  text-[#C6F36B]
                "
              >
                ALSO BUILDING
              </p>

              <p className="mt-2 text-xl font-black">
                MASAR Interactive

                <span className="text-[#FF914D]">
                  .
                </span>
              </p>

              <p
                className="
                  mt-2 text-sm
                  leading-6
                  text-white/60
                "
              >
                My independent creative web studio,
                currently growing and exploring
                new digital experiences.
              </p>

              <a
                href="https://masar-interactive.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4 inline-flex
                  items-center gap-2
                  text-sm font-bold
                  text-[#C6F36B]
                  hover:text-white
                "
              >
                Explore MASAR ↗
              </a>
            </div>

          </div>

          {/* RIGHT CONTACT FORM */}

          <form
            action="https://formspree.io/f/mbljewyj"
            method="POST"
            className="
              space-y-6
              rounded-3xl
              border border-white/15
              bg-[#10233A]/75
              p-6
              shadow-2xl
              md:p-9
            "
          >
            {/* FORM HEADER */}

            <div
              className="
                flex items-center
                justify-between gap-3
                border-b border-white/15
                pb-6
              "
            >
              <h3 className="text-2xl font-black">
                TELL ME ABOUT YOUR PROJECT
              </h3>

              <span
                aria-hidden="true"
                className="text-2xl text-[#C6F36B]"
              >
                ↗
              </span>
            </div>

            {/* NAME + EMAIL */}

            <div className="grid gap-6 sm:grid-cols-2">

              {/* NAME */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-white/80"
                >
                  Your Name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  className="
                    w-full rounded-xl
                    border border-white/20
                    bg-[#081426]/70
                    px-4 py-3
                    text-white
                    placeholder:text-white/35
                    outline-none
                    transition
                    focus:border-[#C6F36B]
                    focus:ring-2
                    focus:ring-[#C6F36B]/20
                  "
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-white/80"
                >
                  Your Email *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className="
                    w-full rounded-xl
                    border border-white/20
                    bg-[#081426]/70
                    px-4 py-3
                    text-white
                    placeholder:text-white/35
                    outline-none
                    transition
                    focus:border-[#C6F36B]
                    focus:ring-2
                    focus:ring-[#C6F36B]/20
                  "
                />
              </div>

            </div>

            {/* SERVICE SELECTION */}

            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-semibold text-white/80"
              >
                What do you need?
              </label>

              <select
                id="service"
                name="service"
                defaultValue=""
                className="
                  w-full rounded-xl
                  border border-white/20
                  bg-[#081426]
                  px-4 py-3
                  text-white
                  outline-none
                  transition
                  focus:border-[#C6F36B]
                  focus:ring-2
                  focus:ring-[#C6F36B]/20
                "
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option>New Website</option>
                <option>Website Redesign</option>
                <option>WordPress Development</option>
                <option>Interactive Experience</option>
                <option>Other / Not Sure Yet</option>
              </select>
            </div>

            {/* MESSAGE */}

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-white/80"
              >
                Your Message *
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell me about your idea, goals, or timeline..."
                className="
                  w-full resize-y
                  rounded-xl
                  border border-white/20
                  bg-[#081426]/70
                  px-4 py-3
                  text-white
                  placeholder:text-white/35
                  outline-none
                  transition
                  focus:border-[#C6F36B]
                  focus:ring-2
                  focus:ring-[#C6F36B]/20
                "
              />
            </div>

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              className="
                flex min-h-14 w-full
                items-center justify-center
                gap-3
                rounded-full
                bg-[#C6F36B]
                px-6 py-3
                text-sm font-black
                uppercase tracking-wide
                text-[#081426]
                transition
                hover:bg-white
              "
            >
              SEND INQUIRY

              <span aria-hidden="true">
                ↗
              </span>
            </button>

            <p
              className="
                text-center
                text-xs leading-5
                text-white/45
              "
            >
              Your message is sent securely
              through the contact form.
            </p>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;