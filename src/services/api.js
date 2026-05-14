const BASE_URL = "http://localhost:3000";

export const getPets = async () => {
  const res = await fetch(`${BASE_URL}/pets`);
  return res.json();
};

export const addPet = async (pet) => {
  const res = await fetch(`${BASE_URL}/pets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pet),
  });

  return res.json();
};

export const deletePet = async (id) => {
  await fetch(`${BASE_URL}/pets/${id}`, {
    method: "DELETE",
  });
};

export const updatePet = async (id, updatedPet) => {
  const res = await fetch(`${BASE_URL}/pets/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPet),
  });

  return res.json();
};