function Volunteer() {
  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Volunteer With Us
      </h1>

      <form className="bg-white p-6 rounded shadow-lg">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 w-full mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
        />

        <textarea
          placeholder="Why do you want to volunteer?"
          className="border p-2 w-full mb-4"
        />

        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Volunteer;