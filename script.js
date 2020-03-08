const button = document.querySelector("button");
const display = document.querySelector(".display");
button.addEventListener("click", async () => {
  const response = await axios.get(`https://www.boredapi.com/api/activity/`);
  const displayNew = response.data.activity;
  display.innerHTML = displayNew;
});

getCategories();
