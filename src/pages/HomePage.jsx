import { Link } from "react-router-dom";
import PetCard from "../components/PetCard";


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
        <Link to="/adopt">Adopt a Pet</Link>
        <Link to="/volunteer">Volunteer With Us</Link>
      </section>

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

      {/* Get Involved Section */}
      <section>
        <h2>Ways You Can Help</h2>
        <p>Together we can build a brighter future for every animal in our care.</p>
        <div>
          <div>
            <h3>Adopt / Foster</h3>
            <p>Open your home to a pet in need — permanently or temporarily.</p>
            <Link to="/adopt">Learn More</Link>
          </div>
          <div>
            <h3>Volunteer</h3>
            <p>Give your time to care for animals and support rescue operations.</p>
            <Link to="/volunteer">Learn More</Link>
          </div>
          <div>
            <h3>Donate</h3>
            <p>Your contribution funds food, shelter, and medical care for our animals.</p>
            <Link to="/donate">Learn More</Link>
          </div>
          <div>
            <h3>Report a Case</h3>
            <p>Witnessed animal abuse or a stray in distress? Let us know.</p>
            <Link to="/report-case">Report Now</Link>
          </div>
        </div>
      </section>



      {/* Join the Community Section */}
      <section>
        <h2>Join the Paw Haven Community</h2>
        <p>
          Get the latest news, available adoptable pets, upcoming events, and more
          delivered straight to your inbox.
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

    </div>
  );
}

export default HomePage;