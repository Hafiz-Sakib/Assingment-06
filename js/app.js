const searchPhone = () => {
  const searchInput = document.getElementById("search-input");
  const searchInputValue = searchInput.value;
  const error = document.getElementById("error");
  //   if (isNaN(searchInputValue) || searchInputValue == "") {
  //     error.innerText = "Give a number value 😢";
  //     searchInput.value = "";
  //   } else if (searchInputValue <= 0) {
  //     error.innerText = "Give a Positive Value 😢";
  //     searchInput.value = "";
  //   } else if (searchInputValue > 52) {
  //     error.innerText = "there is only 52 cards";
  //   } else {
  fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchInputValue}`
  )
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));
  //   }
};

const displayPhones = (phones) => {
  const first20Phones = phones.slice(0, 20);
  for (const phone of first20Phones) {
    console.log(phone);
    const main = document.getElementById("main");
    const newDiv = document.createElement("div");
    newDiv.classList.add("col");
    newDiv.innerHTML = `
      <div class="card h-100" id = "single-card">
      <img width="350px" height="400px" src="${phone.image}" />
      <div class="card-body">
        <h4 class="card-title text-danger fw-bolder"> ${phone.phone_name}</h4>
        <p class="card-text">Brand: ${phone.brand}</p>
        <button class="btn btn-success" type="submit" id='details'>Details</button>
      </div>
      `;
    main.appendChild(newDiv);
  }
};
