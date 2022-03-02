// function for display Spinner

const toggleSpinner = (displayStyle) => {
  document.getElementById("spinner").style.display = displayStyle;
};

const searchPhone = () => {
  const searchInput = document.getElementById("search-input");
  //Display Spinner
  toggleSpinner("block");
  const searchInputValue = searchInput.value;
  const error = document.getElementById("error");
  const detailCard = document.getElementById("detail-card");
  if (searchInputValue == "") {
    error.innerText = "Please,Enter The Phone Name That You Searching For ☹️";
    toggleSpinner("none");

    //Clear Previous Data
    searchInput.value = "";
    main.innerHTML = ``;
    detailCard.textContent = "";
  } else if (searchInputValue < 0 || searchInputValue > 0) {
    error.innerText = "Enter The Model Name That You Searching For 🤔";
    toggleSpinner("none");

    //Clear Previous Data
    searchInput.value = "";
    main.innerHTML = ``;
    detailCard.textContent = "";
  } else {
    //Clear Previous Data
    main.innerHTML = ``;
    detailCard.textContent = "";

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
  toggleSpinner("none");
};

const phoneDetails = (uniqeDetails) => {
  fetch(`https://openapi.programming-hero.com/api/phone/${uniqeDetails}`)
    .then((res) => res.json())
    .then((data) => showDetails(data.data));
};
const showDetails = (data) => {
  const detailCard = document.getElementById("detail-card");
  detailCard.textContent = "";
  const div = document.createElement("div");
  div.classList.add("col");

  div.innerHTML = `
  <div class="card";">
  <img src="${data.image}" class="card-img-top rounded" id ="detail-img" alt="...">
  <h5 class="card-title text-info text-center bg-white"></h5>
  <div class="card-body">

  <h1 class="card-text text-danger text-center">${data.name}</h1>

  <table class="table table-hover">
  <tbody>
      <tr>
          <td >Brand:</td>
          <td>${data.brand}</td>
      </tr>
      <tr>
          <td>First Release Date:</td>
          <td>${data.releaseDate}</td>
      </tr>

      <tr>
          <td >Display:</td>
          <td>${data.mainFeatures.displaySize}</td>
      </tr>
      
      <tr>
          <td>Chipset:</td>
          <td>${data.mainFeatures.chipSet}</td>
      </tr>

      <tr>
          <td>Memory:</td>
          <td>${data.mainFeatures.memory}</td>
      </tr>

      <tr>
          <td>Sensors:</td>
          <td>${data.mainFeatures.sensors}</td>
      </tr>
      <tr>
          <td class = "fw-bolder text-danger">More Specifications:</td>
      </tr>
      
      <tr>
          <td>Wifi & Networks:</td>
          <td>${data.others.WLAN}</td>
      </tr>
      
      <tr>
          <td>Bluetooth:</td>
          <td>${data.others.Bluetooth}</td>
      </tr>
      
      <tr>
          <td>GPS:</td>
          <td>${data.others.GPS}</td>
      </tr>
      
      <tr>
          <td>NFC:</td>
          <td>${data.others.NFC}</td>
      </tr>
      
      <tr>
          <td>Radio:</td>
          <td>${data.others.USB}</td>
      </tr>
  </tbody>
</table>

</div>
  `;
  detailCard.appendChild(div);
};
