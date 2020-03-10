const button = document.querySelector("button");
const display = document.querySelector(".display");
const price = document.querySelector(".price");
button.addEventListener("click", async () => {
  const response = await axios.get(`https://www.boredapi.com/api/activity/`);
  const displayNew = response.data.activity;
  display.innerHTML = displayNew;
  const cost = response.data.price;
  if (cost >= 0.4) {
    price.innerHTML = "$$$";
  } else if (cost === 0) {
    price.innerHTML = "FREE";
  } else {
    price.innerHTML = "$";
  }
});
