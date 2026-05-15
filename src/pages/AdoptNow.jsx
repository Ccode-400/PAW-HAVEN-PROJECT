import { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import PetForm from "../components/PetForm";
import "../styles/AdoptNow.css";

function AdoptNow() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pets, setPets] = useState([]);

  const filteredPets = pets.filter((pet) => {
  return (
    pet.pet_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||

    pet.pet_type
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||

    pet.breed
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
});

  // Fetch pets from db.json
  useEffect(() => {
  fetch("http://localhost:3000/pets")
    .then((res) => {
      console.log("FETCH RESPONSE:", res);
      return res.json();
    })
    .then((data) => {
      console.log("FETCH DATA:", data);
      setPets(data);
    })
    .catch((error) => console.log("FETCH ERROR:", error));
}, []);

  // Add new pet
  function handleAddPet(newPet) {
    fetch("http://localhost:3000/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPet),
    })
      .then((res) => res.json())
      .then((addedPet) => {
        setPets([...pets, addedPet]);
      });
  }

  // Delete pet
  function handleDelete(id) {
    fetch(`http://localhost:3000/pets/${id}`, {
      method: "DELETE",
    }).then(() => {

    const updatedPets = pets.filter((pet) => pet.id !== id);

    setPets(updatedPets);
    });
  }

  return (
    <div className="adopt-page">
      <div className="adopt-header">
        <h1>Pets Available for Adoption</h1>

        <p>
          Give rescued cats and dogs a loving forever home.
        </p>
      </div>

      <PetForm onAddPet={handleAddPet} />

        <div className="search-container">

          <input
            type="text"
            placeholder="Search by name, type, or breed..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="search-input"
          />

        </div>

      <div className="pets-grid">
        {filteredPets.map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default AdoptNow;