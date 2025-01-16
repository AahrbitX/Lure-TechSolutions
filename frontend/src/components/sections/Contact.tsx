import Heading from "../heading";

const Contact = () => {
  return (
    <div className="sections h-[1000px] text-white">
      <h1 className="text-6xl font-medium pl-20" >Would You Like To Build Your <br /> Blockbuster <span className="text-cgreen font-semibold" >(business-tech-brand)</span></h1>
      <div className="h-fit flex justify-between p-20 pt-0">
      {/* Left Side: Contact Form */}
      <div className="w-1/2 pt-20">
        <form className="flex flex-col gap-6 mt-6">
          {/* Name Field */}
          <div className="flex flex-col p-2">
            <label htmlFor="name" className="text-lg mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="border-b-2 bg-black  border-white p-2 focus:border-cgreen border-0"
            />
          </div>
          {/* Phone Number Field */}
          <div className="flex flex-col p-2">
            <label htmlFor="phone" className="text-lg mb-2 font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              className="border-b-2  bg-black  border-white border-cblack p-2 focus:border-cgreen border-0"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col p-2">
            <label htmlFor="email" className="text-lg mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="border-b-2  bg-black  border-white border-cblack p-2 focus:border-cgreen border-0"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col p-2">
            <label htmlFor="message" className="text-lg mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="border-b-2  bg-black  border-white border-cblack p-2 focus:border-cgreen border-0"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-48 bg-cgreen p-2 text-white py-2 rounded-full font-bold hover:bg-cdarkgreen transition-all mt-4"
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

    </div>

  );
};

export default Contact;
