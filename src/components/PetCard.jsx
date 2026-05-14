function PetCard({ pet }) {
  return (
    <div>
      <h3>{pet.name}</h3>
      <p>{pet.type}</p>
      <p>{pet.breed}</p>
      <p>{pet.age}</p>
    </div>
  );
}
export default PetCard;