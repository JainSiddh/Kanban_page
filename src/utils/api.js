// src/utils/api.js
const API_URL = "https://apimocha.com/quicksell/data";

async function fetchTickets() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

export { fetchTickets };
