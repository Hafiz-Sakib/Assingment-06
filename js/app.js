const searchPhone = () => {
  const searchInput = document.getElementById("search-input");
  const searchInputValue = searchInput.value;
  const error = document.getElementById("error");
  if (searchInputValue == "") {
    error.innerText = "Please,Enter The Phone Name That You Searching For ☹️";
    searchInput.value = "";
    main.innerHTML = ``;
  } else if (searchInputValue < 0 || searchInputValue > 0) {
    error.innerText = "Enter The Model Name That You Searching For 🤔";
    searchInput.value = "";
    main.innerHTML = ``;
  } else {
    main.innerHTML = ``;
    fetch(
      `https://openapi.programming-hero.com/api/phones?search=${searchInputValue}`
    )
      .then((res) => res.json())
      .then((data) => displayPhones(data.data));
    searchInput.value = "";
    error.innerHTML = ``;
  }
};

//Display Phone Function
const displayPhones = (phones) => {
  const first20Phones = phones.slice(0, 20);
  const main = document.getElementById("main");
  for (const phone of first20Phones) {
    // console.log(phone);
    const newDiv = document.createElement("div");
    newDiv.classList.add("col");
    newDiv.innerHTML = `
      <div class="card h-100" id = "single-card">
      <img width="350px" height="400px" src="${phone.image}" />
      <div class="card-body">
        <h4 class="card-title text-danger fw-bolder"> ${phone.phone_name}</h4>
        <p class="card-text">Brand: ${phone.brand}</p>
        <button onclick = "phoneDetails('${phone.slug}')" class="btn btn-success" type="submit" id='details'>Details</button>
      </div>
      `;
    main.appendChild(newDiv);
  }
};

const phoneDetails = (uniqeDetails) => {
  fetch(`https://openapi.programming-hero.com/api/phone/${uniqeDetails}`)
    .then((res) => res.json())
    .then((data) => showDetails(data.data));
};
const showDetails = (data) => {
  console.log(data);
};
