import "../styles/PetCard.css";

function PetCard({ pet, onDelete }) {
  return (
    <div className="pet-card">
      <img
        src={pet.image_url}
        alt={pet.pet_name}
      />

      <div className="pet-info">
        <h2>{pet.pet_name}</h2>

        <p>
          <strong>Type:</strong> {pet.pet_type}
        </p>

        <p>
          <strong>Breed:</strong> {pet.breed}
        </p>

        <p>
          <strong>Age:</strong> {pet.age}
        </p>

        <p>
          <strong>Gender:</strong> {pet.gender}
        </p>

        <p>
          <strong>Vaccinated:</strong>{" "}
          {pet.vaccinated ? "Yes" : "No"}
        </p>

        <p>
          <strong>Spayed/Neutered:</strong>{" "}
          {pet.spayed_neutered ? "Yes" : "No"}
        </p>

        <p>
          <strong>Adoption Fee:</strong> Ksh {pet.adoption_fee}
        </p>

        <p>
          <strong>Adoption Date:</strong> {pet.adoption_date}
        </p>

        <hr />

        <h3>Contact Information</h3>

        <p>
          <strong>Name:</strong> {pet.owner_name}
        </p>

        <p>
          <strong>Email:</strong> {pet.owner_email}
        </p>

        <p>
          <strong>Address:</strong> {pet.owner_address}
        </p>

        <button
          className="delete-btn"
          onClick={() => onDelete(pet.id)}
        >
          Remove Pet
        </button>
      </div>
    </div>
  );
}

export default PetCard;