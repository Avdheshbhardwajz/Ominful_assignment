// Function to simulate an API call using promises
function simulateApiCall(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = [
        "apple pie",
        "apricot tart",
        "banana bread",
        "blueberry muffin",
        "cherry pie",
        "pineapple upside-down cake",
      ];
      const filteredResults = results.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filteredResults);
    }, 1000); // Simulate a 1-second delay
  });
}

// Debounce function
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Function to handle search input and display results
async function handleSearchInput(event) {
  const query = event.target.value;

  if (query.length === 0) {
    updateSearchResults([]);
    return;
  }

  const results = await simulateApiCall(query);
  updateSearchResults(results);
}

// Function to update the DOM with search results
function updateSearchResults(results) {
  const resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = results
    .map((result) => `<div class="result-item">${result}</div>`)
    .join("");
}

// Attach the debounced event listener to the search input
document
  .getElementById("searchInput")
  .addEventListener("input", debounce(handleSearchInput, 500));
