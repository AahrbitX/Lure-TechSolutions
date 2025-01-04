import Heading from "../heading";

const Contact = () => {
  return (
    <div className="sections h-fit flex justify-between pt-20 pb-20">
      {/* Left Side: Contact Form */}
      <div className="w-1/2">
        <Heading value="Contact Us" />
        <form className="flex flex-col gap-6 mt-6">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-cblack text-lg mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="border-b-2 border-cblack p-2 focus:border-cgreen border-0"
            />
          </div>
          {/* Phone Number Field */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-cblack text-lg mb-2 font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              className="border-b-2 border-cblack p-2 focus:border-cgreen border-0"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-cblack text-lg mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="border-b-2 border-cblack p-2 focus:border-cgreen border-0"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-cblack text-lg mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="border-b-2 border-cblack p-2 focus:border-cgreen border-0"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-48 bg-cgreen text-white py-2 rounded-full font-bold hover:bg-cdarkgreen transition-all mt-4"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Side Content */}
      <div className="w-1/2 flex flex-col justify-center items-start pl-10">
        <h2 className="text-2xl font-bold text-cblack mb-4">Get in Touch</h2>
        <p className="text-cblack text-lg mb-4">
          We would love to hear from you. Please fill out the form and we will get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default Contact;
