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
