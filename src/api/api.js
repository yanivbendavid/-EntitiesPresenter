import credentials from "../credentials.json";

export async function getEntities() {
  const request = await fetch(credentials.database, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!request.ok) {
    throw new Error("Error submitting data");
  }

  return await request.json();
}

export async function deleteEntity(id) {
  const request = await fetch(`${credentials.entity}${id}.json`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!request.ok) {
    throw new Error("Error deleting data");
  }

  return await request;
}
