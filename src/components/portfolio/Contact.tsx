const Contact = () => {
  return (
    <section id="contact" className="container mx-auto my-12 p-8">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
