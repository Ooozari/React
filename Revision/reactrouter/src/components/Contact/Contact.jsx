function Contact() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-[#0e0e0ed5] to-black flex items-center justify-center px-4 py-10">
      <div className="bg-[#1f1f1f] rounded-2xl shadow-lg p-8 md:p-12 max-w-xl w-full text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">Contact Us</h2>
        <p className="text-gray-400 mb-8">
          Have questions, suggestions, or just want to say hi? Drop us a message!
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
