const searchButton = () => {
  const searchInput = document.getElementById("search-input");
  const searchInputValue = parseInt(searchInput.value);
  const error = document.getElementById("error");
  if (isNaN(searchInputValue) || searchInputValue == "") {
    error.innerText = "Give a number value 😢";
    searchInput.value = "";
  } else if (searchInputValue <= 0) {
    error.innerText = "Give a Positive Value 😢";
    searchInput.value = "";
  } else if (searchInputValue > 52) {
    error.innerText = "there is only 52 cards";
  } else {
    fetch(
      `https://deckofcardsapi.com/api/deck/new/draw/?count=${searchInputValue}`
    )
      .then((res) => res.json())
      .then((data) => displayCards(data));
  }
};
const displayCards = (cards) => {
  for (const card in cards) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("col");
    newDiv.innerHTML = `
      <div class="card h-100" id = "single-card">
      <img width = "400px" height = "350px" src="" class="card-img-top" alt""/>
      <div class="card-body">
        <h5 class="card-title text-danger fw-bolder"></h5>
        <p class="card-text"></p>
        <p class="card-text"></p>
        <p class="card-text"></p>
        <p class="card-text"></p>
        <p class="card-text"></p>
        <p class="card-text"></p>
        <button class="btn btn-success" type="submit" id='details'>Details</button>
      </div>
      `;
  }
};
