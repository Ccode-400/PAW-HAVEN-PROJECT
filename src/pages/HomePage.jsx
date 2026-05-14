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
{/* How We Make a Difference */}
      <section>
        <h2>How We Make a Difference</h2>
        <p>
          We care for rescued cats and dogs and connect them with loving forever
          homes. Every animal in our shelter receives food, shelter, and medical
          attention until they find their family.
        </p>
        <div>
          <div>
            <h3>100+</h3>
            <p>Animals sheltered daily</p>
          </div>
          <div>
            <h3>500+</h3>
            <p>Successful adoptions yearly</p>
          </div>
          <div>
            <h3>100%</h3>
            <p>Funded by public donations</p>
          </div>
        </div>
      </section>