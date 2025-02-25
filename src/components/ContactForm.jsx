const ContactForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-5">
      <div>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold mb-3">Get In Touch</h1>
          <p className="text-gray-600">
            Use the form below to get in touch with the sales team
          </p>
        </div>
        <form>
          <div className="grid md:grid-cols-2 gap-5 mb-3">
            <input
              type="text"
              className="w-full transition-all rounded-lg p-3 border-2 focus:outline-none hover:border-black focus:ring-black"
              name=""
              id=""
              placeholder="Your Name*"
            />
            <input
              type="email"
              className="w-full transition-all rounded-lg p-3 border-2 focus:outline-none hover:border-black focus:ring-black"
              name=""
              id=""
              placeholder="Your Email*"
            />
          </div>
          <div>
            <textarea
              id="message"
              className="w-full p-2 mt-2 transition-all border-2 rounded-lg hover:border-black focus:outline-none  focus:ring-black"
              rows="4"
              placeholder="Your Message*"
            ></textarea>
          </div>
          <button className="flex items-center gap-1 mt-6 px-6 border-black rounded-full py-4 bg-black text-white border font-semibold  transition hover:bg-inherit hover:text-black">
            <p>Send Message</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
