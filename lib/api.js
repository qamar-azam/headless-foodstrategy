const API_URL = "http://localhost/foodstrategy/graphql";

async function fetchAPI(query, { variables } = {}) {
  const headers = {
    "Content-Type": "application/json",
  };
  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  // error handling work
  const json = await res.json();

  if (json.errors) {
    throw new Error("Failed to fetch API");
  }
  return json.data;
}
