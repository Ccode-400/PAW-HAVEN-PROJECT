function ReportCase() {
  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Report Animal Cruelty
      </h1>

      <form className="bg-white p-6 rounded shadow-lg">
        <input
          type="text"
          placeholder="Location"
          className="border p-2 w-full mb-4"
        />

        <textarea
          placeholder="Describe the incident"
          className="border p-2 w-full mb-4"
        />

        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Submit Report
        </button>
      </form>
    </div>
  );
}
