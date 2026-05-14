import "../styles/ReportCase.css";

function ReportCase() {
  return (
    <div className="report-container">
      <h1>Report Animal Cruelty</h1>

      <form className="report-form">
        <input
          type="text"
          placeholder="Location"
        />

        <textarea
          placeholder="Describe the incident"
        ></textarea>

        <button type="submit">
          Submit Report
        </button>
      </form>
    </div>
  );
}

