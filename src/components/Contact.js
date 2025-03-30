const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-md">
        We'd love to hear from you! Reach out to us for any queries or support.
      </p>
      <form className="bg-white shadow-lg rounded-lg p-6 mt-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-800 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

