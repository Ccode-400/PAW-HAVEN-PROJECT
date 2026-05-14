import { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import PetForm from "../components/PetForm";
import "../styles/AdoptNow.css";

function AdoptNow() {
  const [pets, setPets] = useState([]);

  // Fetch pets from db.json
  useEffect(() => {
    fetch("http://localhost:3000/pets")
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((error) => console.log(error));
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
    });

    const updatedPets = pets.filter((pet) => pet.id !== id);

    setPets(updatedPets);
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

      <div className="pets-grid">
        {pets.map((pet) => (
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