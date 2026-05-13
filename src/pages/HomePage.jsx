function HomePage() {
  return (
    <div>
    </div>
  );
}

export default HomePage;
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>

      {/* Hero Section */}
      <section>
        <h1>Give a Rescue Pet a Second Chance</h1>
        <p>
          At Paw Haven, we rescue and rehome cats and dogs, giving them the love
          and care they deserve. Find your new best friend today.
        </p>
        <Link to="/adopt-now">Adopt a Pet</Link>
        <Link to="/volunteer">Volunteer With Us</Link>
      </section>

    </div>
  );
}

export default HomePage;