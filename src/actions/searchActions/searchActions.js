export const SEARCH_ACTION = "SEARCH";
export const SEARCH_ACTION_FULFILLED = "SEARCH_FULFILLED";
const API_KEY = "e260c91c";

export function search(payload) {
  return {
    type: SEARCH_ACTION,
    payload: fetch(`http://www.omdbapi.com/?s=${payload}&apikey=${API_KEY}`)
      .then(response => response.json())
      .catch(error => error)
  };
}
