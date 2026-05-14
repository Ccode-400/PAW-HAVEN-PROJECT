import { useState } from "react";
import "../styles/PetForm.css";

function PetForm({ onAddPet }) {
  const [formData, setFormData] = useState({
    image_url: "",
    pet_name: "",
    pet_type: "",
    breed: "",
    age: "",
    gender: "",
    vaccinated: false,
    spayed_neutered: false,
    adoption_fee: "",
    adoption_date: "",
    owner_name: "",
    owner_email: "",
    owner_address: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPet(formData);

    setFormData({
      image_url: "",
      pet_name: "",
      pet_type: "",
      breed: "",
      age: "",
      gender: "",
      vaccinated: false,
      spayed_neutered: false,
      adoption_fee: "",
      adoption_date: "",
      owner_name: "",
      owner_email: "",
      owner_address: "",
    });
  }

  return (
    <form className="pet-form" onSubmit={handleSubmit}>
      <h2>Add Pet For Adoption</h2>

      <input
        type="text"
        name="pet_name"
        placeholder="Pet Name"
        value={formData.pet_name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="pet_type"
        placeholder="Dog or Cat"
        value={formData.pet_type}
        onChange={handleChange}
      />

      <input
        type="text"
        name="breed"
        placeholder="Breed"
        value={formData.breed}
        onChange={handleChange}
      />

      <input
        type="text"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />

      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image_url"
        placeholder="Image URL"
        value={formData.image_url}
        onChange={handleChange}
      />

      <input
        type="number"
        name="adoption_fee"
        placeholder="Adoption Fee"
        value={formData.adoption_fee}
        onChange={handleChange}
      />

      <input
        type="date"
        name="adoption_date"
        value={formData.adoption_date}
        onChange={handleChange}
      />

      <input
        type="text"
        name="owner_name"
        placeholder="Owner Name"
        value={formData.owner_name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="owner_email"
        placeholder="Owner Email"
        value={formData.owner_email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="owner_address"
        placeholder="Owner Address"
        value={formData.owner_address}
        onChange={handleChange}
      />

      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="vaccinated"
            checked={formData.vaccinated}
            onChange={handleChange}
          />
          Vaccinated
        </label>

        <label>
          <input
            type="checkbox"
            name="spayed_neutered"
            checked={formData.spayed_neutered}
            onChange={handleChange}
          />
          Spayed / Neutered
        </label>
      </div>

      <button type="submit">
        Add Pet
      </button>
    </form>
  );
}

export default PetForm;