//Global Variables

const button = document.querySelector("button");
const display = document.querySelector(".display");
const price = document.querySelector(".price");
const backGround = document.querySelector("body");
const hero = document.querySelector("h1");
const robot = document.querySelector(".robot");

//Pulls data from the boredAPI to display activities

button.addEventListener("click", async () => {
  const response = await axios.get(`https://www.boredapi.com/api/activity/`);
  const displayNew = response.data.activity;
  const type = response.data.type;
  display.innerHTML = displayNew;
  const cost = response.data.price;
  if (cost >= 0.4) {
    price.innerHTML = "$$$";
    price.style.backgroundColor = "olive";
  } else if (cost === 0) {
    price.innerHTML = "FREE";
    price.style.backgroundColor = "lightgreen";
  } else {
    price.innerHTML = "$";
    price.style.backgroundColor = "seagreen";
  }

  //Changes the background for each activity

  if (display.innerText === "Pot some plants and put them around your house") {
    backGround.style.backgroundImage = "url(https://imgur.com/MEvl5uq.jpeg)";
    display.style.backgroundColor = "lightgreen";
    display.style.borderColor = "darkgreen";
    hero.style.color = "lightgreen";
    hero.style.borderColor = "darkgreen";
  } else if (display.innerText === "Write a letter") {
    backGround.style.backgroundImage = "url(https://imgur.com/ynynskM.gif)";
    display.style.backgroundColor = "khaki";
    display.style.borderColor = "darkbrown";
    hero.style.color = "darkbrown";
    hero.style.borderColor = "khaki";
  } else if (
    display.innerText ===
    "Write a thank you letter to an influential person in your life"
  ) {
    backGround.style.backgroundImage = "url(https://imgur.com/RWW48mD.gif)";
    display.style.backgroundColor = "lightgreen";
    display.style.borderColor = "slategray";
    hero.style.color = "lightgreen";
    hero.style.borderColor = "lightgreen";
  } else if (display.innerText === "Learn how to iceskate or rollerskate") {
    backGround.style.backgroundImage =
      "url(https://i.pinimg.com/originals/ba/5b/0f/ba5b0fdac39297a199e4d9ad9c708e29.gif)";
    display.style.backgroundColor = "lightgreen";
    display.style.borderColor = "lightpink";
    hero.style.color = "lightpink";
    hero.style.borderColor = "lightgreen";
  } else if (display.innerText === "Make origami") {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/aJtGw9AHo9KF2/source.gif)";
    display.style.backgroundColor = "lightgreen";
    display.style.borderColor = "green";
    hero.style.color = "green";
    hero.style.borderColor = "lightgreen";
  } else if (
    display.innerText === "Memorize the fifty states and their capitals"
  ) {
    backGround.style.backgroundImage = "url(https://imgur.com/jHeXlFy.gif)";
    display.style.backgroundColor = "blue";
    display.style.borderColor = "red";
    hero.style.color = "blue";
    hero.style.borderColor = "red";
  } else if (display.innerText === "Listen to a new podcast") {
    backGround.style.backgroundImage =
      "url(https://uproxx.com/wp-content/uploads/2016/07/podcast1.gif)";
    display.style.backgroundColor = "#D50BE3";
    display.style.borderColor = "darkpurple";
    hero.style.color = "white";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn Kotlin") {
    backGround.style.backgroundImage = "url(https://imgur.com/4Uq4IUb.gif)";
    display.style.backgroundColor = "lightgreen";
    display.style.borderColor = "darkgreen";
    hero.style.color = "lightgreen";
    hero.style.borderColor = "darkgreen";
  } else if (display.innerText === "Catch up on world news") {
    backGround.style.backgroundImage = "url(https://imgur.com/L0D7oEb.gif)";
    display.style.backgroundColor = "lightblue";
    display.style.borderColor = "green";
    hero.style.color = "darkkhaki";
    hero.style.borderColor = "green";
  } else if (display.innerText === "Take your dog on a walk") {
    backGround.style.backgroundImage = "url(https://imgur.com/onfyjyz.gif)";
    display.style.backgroundColor = "blue";
    display.style.borderColor = "white";
    hero.style.color = "blue";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Take a caffeine nap") {
    backGround.style.backgroundImage =
      "url(https://media3.giphy.com/media/L3WTPGFqKS3PpbYoRZ/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "darkbrown";
    hero.style.color = "white";
    hero.style.borderColor = "brown";
  } else if (
    display.innerText === "Create a cookbook with your favorite recipes"
  ) {
    backGround.style.backgroundImage =
      "url(https://media0.giphy.com/media/26gJzfsOyqdab559S/giphy.gif)";
    display.style.backgroundColor = "khaki";
    display.style.borderColor = "red";
    hero.style.color = "red";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Create and follow a savings plan") {
    backGround.style.backgroundImage =
      "url(https://thumbs.gfycat.com/AnnualEnlightenedHapuka-max-1mb.gif)";
    display.style.backgroundColor = "lightpink";
    display.style.borderColor = "white";
    hero.style.color = "pink";
    hero.style.borderColor = "antiquewhite";
  } else if (display.innerText === "Listen to your favorite album") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/1ULCgkWc2IiXJyxp5o/giphy.gif)";
    display.style.backgroundColor = "orange";
    display.style.borderColor = "white";
    hero.style.color = "orange";
    hero.style.borderColor = "black";
  } else if (display.innerText === "Visit your past teachers") {
    backGround.style.backgroundImage =
      "url(https://media1.tenor.com/images/5eb60ef111b120b20b43f5f8480b2bbb/tenor.gif?itemid=4713384)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "gray";
    hero.style.color = "lightgray";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Shop at support your local farmers market"
  ) {
    backGround.style.backgroundImage =
      "url(https://media1.giphy.com/media/xUNd9Scc3k8momhZMk/giphy.gif)";
    display.style.backgroundColor = "yellow";
    display.style.borderColor = "white";
    hero.style.color = "white";
    hero.style.borderColor = "yellow";
  } else if (display.innerText === "Do yoga") {
    backGround.style.backgroundImage = "url(https://imgur.com/WG13X0w.gif)";
    display.style.backgroundColor = "lightblue";
    display.style.borderColor = "orange";
    hero.style.color = "green";
    hero.style.borderColor = "orange";
  } else if (
    display.innerText === "Start a webinar on a topic of your choice"
  ) {
    backGround.style.backgroundImage =
      "url(https://media3.giphy.com/media/jrocgfa3tvjh8nb1Tl/giphy.gif)";
    display.style.backgroundColor = "brown";
    display.style.borderColor = "lightorange";
    hero.style.color = "lightyellow";
    hero.style.borderColor = "lightorange";
  } else if (display.innerText === "Research a topic you're interested in") {
    backGround.style.backgroundImage =
      "url(https://media.tenor.com/images/9417a4f73400757a7c38961507017728/tenor.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "red";
    hero.style.color = "darkblue";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn a new recipe") {
    backGround.style.backgroundImage =
      "url(https://media3.giphy.com/media/l3vRaUGy4krQw0nXq/giphy.gif)";
    display.style.backgroundColor = "orange";
    display.style.borderColor = "white";
    hero.style.color = "orange";
    hero.style.borderColor = "black";
  } else if (display.innerText === "Learn how to play a new sport") {
    backGround.style.backgroundImage =
      "url(https://static.wixstatic.com/media/ca0f9f_d7b099d47ad147b3b4dc9e153b46fc00~mv2.gif)";
    display.style.backgroundColor = "lightblue";
    display.style.borderColor = "white";
    hero.style.color = "green";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Have a paper airplane contest with some friends"
  ) {
    backGround.style.backgroundColor = "pink";
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/20LIDuT0O2lv5xdjwP/source.gif)";
    display.style.backgroundColor = "pink";
    display.style.borderColor = "darkpink";
    hero.style.color = "white";
    hero.style.borderColor = "darkpink";
  } else if (display.innerText === "Write a short story") {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/hDrBeljWVyQfe/source.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "slategray";
    hero.style.color = "white";
    hero.style.borderColor = "black";
  } else if (display.innerText === "Bake something you've never tried before") {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/l0MYOwKlDcMWvsMXC/giphy.gif)";
    display.style.backgroundColor = "antiquewhite";
    display.style.borderColor = "lightblue";
    hero.style.color = "lightblue";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Paint the first thing you see") {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/d31vTpVi1LAcDvdm/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "darkblue";
    hero.style.color = "darkblue";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Have a football scrimmage with some friends"
  ) {
    backGround.style.backgroundImage =
      "url(https://cdn2.bigcommerce.com/n-ou1isn/ibk3tn/product_images/uploaded_images/steelerscelecbration.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "white";
    hero.style.color = "white";
    hero.style.borderColor = "yellow";
  } else if (display.innerText === "Watch the sunset or sunrise") {
    backGround.style.backgroundImage = "url()";
    display.style.backgroundColor = "white";
    display.style.borderColor = "white";
    hero.style.color = "white";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn about the Golden Ratio") {
    backGround.style.backgroundImage =
      "url(https://24.media.tumblr.com/f3c907ca37aea8fa44b42df8c21c8458/tumblr_mossaot48Y1qfg7o3o1_400.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "khaki";
    hero.style.color = "black";
    hero.style.borderColor = "khaki";
  } else if (
    display.innerText === "Do something nice for someone you care about"
  ) {
    backGround.style.backgroundImage =
      "url(https://media1.tenor.com/images/876e2687b47c2e045cf96cd1f4991f4c/tenor.gif?itemid=15873053)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "white";
    hero.style.color = "white";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Go to a nail salon") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/k1SuVPEuA89S8/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "red";
    hero.style.color = "red";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Start a band") {
    backGround.style.backgroundImage =
      "url(https://media1.giphy.com/media/2gXmMaX7ldClwngpaQ/source.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "red";
    hero.style.color = "red";
    hero.style.borderColor = "red";
  } else if (display.innerText === "Have a bonfire with your close friends") {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/XxubbS62YCSZDD2rhS/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "white";
    hero.style.color = "white";
    hero.style.borderColor = "red";
  } else if (
    display.innerText === "Listen to music you haven't heard in a while"
  ) {
    backGround.style.backgroundImage =
      "url(https://media3.giphy.com/media/j7CaCheDe8mAM/giphy.gif)";
    display.style.backgroundColor = "purple";
    display.style.borderColor = "white";
    hero.style.color = "white";
    hero.style.borderColor = "purple";
  } else if (
    display.innerText === "Invite some friends over for a game night"
  ) {
    backGround.style.backgroundImage =
      "url(https://thumbs.gfycat.com/DelectableAcidicCowbird-small.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "white";
    hero.style.color = "white";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Go on a long drive with no music") {
    backGround.style.backgroundImage =
      "url(https://24.media.tumblr.com/2ce0b5c63cb972fc525023ec3175e924/tumblr_n1izbiD6Vp1qedb29o2_r1_500.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "white";
    hero.style.color = "white";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Conquer one of your fears") {
    backGround.style.backgroundImage =
      "url(https://media0.giphy.com/media/14ut8PhnIwzros/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "yellow";
    hero.style.color = "white";
    hero.style.borderColor = "yellow";
  } else if (display.innerText === "Go to a music festival with some friends") {
    backGround.style.backgroundImage = "url(https://imgur.com/572rsvc.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "white";
    hero.style.color = "white";
    hero.style.borderColor = "black";
  } else if (
    display.innerText === "Learn to write with your nondominant hand"
  ) {
    backGround.style.backgroundImage =
      "url(https://media0.giphy.com/media/l1Etf6AiRW4HDXjTG/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "black";
    hero.style.color = "slategray";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Teach your dog a new trick") {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/rgQsWppaqFg7S/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "yellow";
    hero.style.color = "white";
    hero.style.borderColor = "yellow";
  } else if (display.innerText === "Play a game of Monopoly") {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/R6ZNan8ZHchva/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "navy";
    hero.style.color = "white";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Find a DIY to do") {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/3o85xkjKr9MycIqgV2/giphy.gif)";
    display.style.backgroundColor = "pink";
    display.style.borderColor = "white";
    hero.style.color = "pink";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Resolve a problem you've been putting off"
  ) {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/8hXXhtex093igAlal1/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Make a simple musical instrument") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/KuwMlOOqagoGk/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Text a friend you haven't talked to in a long time"
  ) {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/lSXxZ6k8WtKve/source.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn calligraphy") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/EhGrfD1nuIR3i/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "black";
    hero.style.color = "black";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Have a picnic with some friends") {
    backGround.style.backgroundImage =
      "url(https://media1.giphy.com/media/Swyh3EwJHH0MUlCcuU/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "darkgreen";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Make bread from scratch") {
    backGround.style.backgroundImage =
      "url(https://blog.thermoworks.com/wp-content/uploads/2019/01/Shapingdough.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Plan a trip to another country") {
    backGround.style.backgroundImage =
      "url(https://www.edreams.com/blog/wp-content/uploads/sites/3/2016/03/globe-map.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn a new programming language") {
    backGround.style.backgroundImage =
      "url(https://media3.giphy.com/media/ZVik7pBtu9dNS/source.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Clean out your garage") {
    backGround.style.backgroundImage =
      "url(https://media3.giphy.com/media/7zYKwrf1hOXxrvUsE7/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "darkblue";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Fill out a basketball bracket") {
    backGround.style.backgroundImage =
      "url(https://i.pinimg.com/originals/a9/9b/43/a99b43253f74dce1fccaab3fb24b7e2c.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Take your cat on a walk") {
    backGround.style.backgroundImage =
      "url(https://i.pinimg.com/originals/24/2b/d9/242bd9d7a7249d078442351d06ca56ad.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Buy a new house decoration") {
    backGround.style.backgroundImage =
      "url(https://thumbs.gfycat.com/HotWarmIsabellinewheatear-max-1mb.gif)";
    display.style.backgroundColor = "lightblue";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "darkblue";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Play a game of tennis with a friend") {
    backGround.style.backgroundImage =
      "url(https://media.tenor.com/images/61afd7d363326db72ca37562d4c2859d/tenor.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Clean out your car") {
    backGround.style.backgroundImage =
      "url(https://thumbs.gfycat.com/OnlyThatAfricanmolesnake-max-1mb.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "white";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn the Chinese erhu") {
    backGround.style.backgroundImage =
      "url(https://thumbs.gfycat.com/CheapEducatedGoldenretriever-max-1mb.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "white";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Visit a nearby museum") {
    backGround.style.backgroundImage =
      "url(https://thumbs.gfycat.com/SnappyCreepyGrebe-size_restricted.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "black";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Make a budget") {
    backGround.style.backgroundImage =
      "url(https://igrad-smedia-igrad.netdna-ssl.com/IMAGE/Article-Images/start-here-guides/Start%20Here%20Budgeting/Budgeting_Pic1_850x400.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "black";
    hero.style.borderColor = "black";
  } else if (display.innerText === "Learn how to whistle with your fingers") {
    backGround.style.backgroundImage =
      "url(https://66.media.tumblr.com/0be29b62ae162b62e0504204e8834150/tumblr_oao8nnlV8a1tyslwao2_540.gifv)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "khaki";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn to play a new instrument") {
    backGround.style.backgroundImage =
      "url(https://thumbs.gfycat.com/ClumsyGoodDuckbillplatypus-size_restricted.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn Express.js") {
    backGround.style.backgroundImage =
      "url(https://cdn.dribbble.com/users/505482/screenshots/1776789/nodejs-dribbble_1.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Create a compost pile") {
    backGround.style.backgroundImage =
      "url(https://media3.giphy.com/media/lr2W8YlTsV0JexsOiP/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Listen to a new music genre") {
    backGround.style.backgroundImage =
      "url(https://78.media.tumblr.com/c871fe43d7c1cbe39b336bbd3e80334f/tumblr_nvh125efiK1rrvheyo1_400.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "yellow";
    hero.style.color = "lightyellow";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Go to a karaoke bar with some friends") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/2yqyKCFhmxb5K8urUB/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Find a charity and donate to it") {
    backGround.style.backgroundImage =
      "url(https://68.media.tumblr.com/a4d43db9cececf0af306e203cb15948d/tumblr_ocl6rxNuNR1uh70wdo1_400.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "red";
    hero.style.color = "red";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Go to an escape room") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/3o7WIMbAvsMddDqXsc/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Take a spontaneous road trip with some friends"
  ) {
    backGround.style.backgroundImage =
      "url(https://images.squarespace-cdn.com/content/v1/53d53c64e4b076e5e3fd36fe/1464986064126-W70ECNGDOOPE33P21WIS/ke17ZwdGBToddI8pDm48kNA2tavFYEWEvhNMD4l5EhRZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGjEzWWkIz-oVmO1XC02BX73ZJaWTtgw8COD7sEtrfnHZuG45vQwBxdpDrCGUSSl5w/image-asset.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Volunteer at a local animal shelter") {
    backGround.style.backgroundImage =
      "url(https://mymodernmet.com/wp/wp-content/uploads/archive/foC98yIgXngXh9sHdyAy_DogTales2.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "pink";
    hero.style.color = "hotpink";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn woodworking") {
    backGround.style.backgroundImage =
      "url(https://blogs.ou.edu/webcomm/files/2015/09/tumblr_n7bk0vKVyG1s2wio8o1_500-28qpayu.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Go to the gym") {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/27IUDmKCXgLZoUNaXQ/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "yellow";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Try a food you don't like") {
    backGround.style.backgroundImage =
      "url(https://i.pinimg.com/originals/f1/77/1c/f1771caa87433884a4a8d38fc89ccccd.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "yellow";
    hero.style.color = "yellow";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn GraphQL") {
    backGround.style.backgroundImage =
      "url(https://thumbs.gfycat.com/ImpoliteMediumLamprey-size_restricted.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "black";
  } else if (display.innerText === "Repaint a room in your house") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/B3V78HyP1I9LG/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "slateblue";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Go to a concert with some friends") {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/l4FsoQbfD0J53F8Xe/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Bake pastries for you and your neighbor") {
    backGround.style.backgroundImage =
      "url(https://data.whicdn.com/images/254174499/original.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "sienna";
    hero.style.color = "sienna";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Go to a local thrift shop") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/OZZr9KYlU4AvK/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (
    display.innerText ===
    "Read a formal research paper on an interesting subject"
  ) {
    backGround.style.backgroundImage =
      "url(https://data.whicdn.com/images/332387038/original.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Meditate for five minutes") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/H7kfFDvD9HSYGRbvid/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Go see a movie in theaters with a few friends"
  ) {
    backGround.style.backgroundImage =
      "url(https://media3.giphy.com/media/3o6ZsTRpiosAcmSias/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Cook something together with someone") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/nm6p1Y746PmjHkctaR/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Create or update your resume") {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/xUA7b2sy5apYCfqhk4/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Start a collection") {
    backGround.style.backgroundImage =
      "url(https://theundefeated.com/wp-content/uploads/2018/08/lwp-47210_27501390-lede.gif?w=3000?w=1240?w=145&quality=80)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Go see a Broadway production") {
    backGround.style.backgroundImage =
      "url(https://media3.giphy.com/media/fc20t5z9JSyxW/source.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Watch a movie you'd never usually watch") {
    backGround.style.backgroundImage =
      "url(https://media0.giphy.com/media/3o6Zt5GUN6iSe6aSys/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Have a photo session with some friends") {
    backGround.style.backgroundImage =
      "url(https://media1.tenor.com/images/22b5e16c497c0168ae9ec9b69c332b45/tenor.gif?itemid=8825199)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Volunteer and help out at a senior center"
  ) {
    backGround.style.backgroundImage =
      "url(https://img.buzzfeed.com/buzzfeed-static/static/2018-12/18/6/asset/buzzfeed-prod-web-03/anigif_sub-buzz-3433-1545132036-1.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "yellow";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn how to use a french press") {
    backGround.style.backgroundImage =
      "url(https://24.media.tumblr.com/11a1be4de6d7d7f82f82351593e567ac/tumblr_msbftyO7zA1sfyf8ho1_1280.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "darkslategray";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Go to the library and find an interesting book"
  ) {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/128MHrlrHNwwU0/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Binge watch a trending series") {
    backGround.style.backgroundImage =
      "url( https://media1.giphy.com/media/xUySTFn3fScCUa7Gec/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Pick up litter around your favorite park") {
    backGround.style.backgroundImage =
      "url(https://2.bp.blogspot.com/-xbIUYwE7KFI/VNBoT-J1ZPI/AAAAAAAABwY/vMMKL2l9BAk/s1600/Cool%2BDudes%2BPicking%2BUp%2BTrash.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (
    display.innerText ===
    "Take a class at your local community center that interests you"
  ) {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/26uf49cYFyZWsPZbW/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn how to use an Arduino") {
    backGround.style.backgroundImage =
      "url(https://thumbs.gfycat.com/WillingDishonestCirriped-small.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn to sew on a button") {
    backGround.style.backgroundImage =
      "url(https://www.thejohnsonprojects.com/wp-content/uploads/2018/03/button-part-1.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "red";
    hero.style.color = "red";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Make tie dye shirts") {
    backGround.style.backgroundImage =
      "url(https://thumbs.gfycat.com/UnsungGiantHornshark-small.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn how to write in shorthand") {
    backGround.style.backgroundImage =
      "url(https://www.shorthand.mkz.com/Carol001.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "black";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Volunteer at your local food pantry") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/l4EpgA5SvB4j3dStW/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Hold a yard sale") {
    backGround.style.backgroundImage =
      "url(https://media.tenor.com/images/9ebfcbcdd05bbee7569825d4ff5bce53/tenor.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Start a daily journal") {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/8e65kx6dqTjyM/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Pull a harmless prank on one of your friends"
  ) {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/N0quj3oPVqSKA/source.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Take a bubble bath") {
    backGround.style.backgroundImage =
      "url(https://24.media.tumblr.com/tumblr_ma4aua0ajs1qgf1i8o1_500.gif)";
    display.style.backgroundColor = "blanchedalmond";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "blanchedalmond";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn how to french braid hair") {
    backGround.style.backgroundImage =
      "url(https://45.media.tumblr.com/tumblr_m0jc48A2dn1qfmgjeo2_500.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "brown";
    hero.style.color = "brown";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Explore the nightlife of your city") {
    backGround.style.backgroundImage =
      "url(https://media0.giphy.com/media/zShmy78cZNh1S/source.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "yellow";
    hero.style.color = "yellow";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Start a garden") {
    backGround.style.backgroundImage =
      "url(https://media3.giphy.com/media/OqJjcc1EB1zdoa2tMN/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Go on a fishing trip with some friends") {
    backGround.style.backgroundImage =
      "url(https://www.bigmarlinpuntacana.com/wp-content/uploads/2016/10/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Go swimming with a friend") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/xT1Ra2tx5CuXU7Hik8/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Have a jam session with your friends") {
    backGround.style.backgroundImage =
      "url(https://media3.giphy.com/media/l0HlVZSyxqzqSw4gM/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (
    display.innerText ===
    "Surprise your significant other with something considerate"
  ) {
    backGround.style.backgroundImage =
      "url(https://media1.giphy.com/media/ftSewueyohr0d4INOm/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Wash your car") {
    backGround.style.backgroundImage =
      "url(https://media3.giphy.com/media/3ohk2jmb4Ihate05nq/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Start a blog for something you're passionate about"
  ) {
    backGround.style.backgroundImage =
      "url(https://thumbs.gfycat.com/AptFirstHartebeest-size_restricted.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "lightgray";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Go for a run") {
    backGround.style.backgroundImage =
      "url(https://media1.tenor.com/images/a37b26d448b046f009b34ec49cbaa25c/tenor.gif?itemid=11751318)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Go to a concert with local artists with some friends"
  ) {
    backGround.style.backgroundImage =
      "url(https://thumbs.gfycat.com/RipeAdvancedIndianpangolin-size_restricted.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Draw and color a Mandala") {
    backGround.style.backgroundImage = "url(https://i.gifer.com/7QNa.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "black";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn how to fold a paper crane") {
    backGround.style.backgroundImage =
      "url(https://media1.giphy.com/media/GOGWAl3JzmsLe/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "lightslategray";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Fix something that's broken in your house"
  ) {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/3o7btY356cSVYzmFS8/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Play basketball with a group of friends") {
    backGround.style.backgroundImage =
      "url(https://66.media.tumblr.com/4cc094afd869011d90e89c0c2b298d3a/tumblr_n1f34dSlOd1s3gys4o1_400.gifv)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "lightorange";
    hero.style.color = "lightorange";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn how the internet works") {
    backGround.style.backgroundImage =
      "url(https://media1.giphy.com/media/3o7H56TgZkKOwqSjlK/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Think of a new business idea") {
    backGround.style.backgroundImage = "url(https://i.imgur.com/KLIDBMl.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "white";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Come up with some business ideas") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/26FlsXbeMANdBgjy8/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "black";
    hero.style.borderColor = "white";
  } else if (
    display.innerText ===
    "Clean out your closet and donate the clothes you've outgrown"
  ) {
    backGround.style.backgroundImage =
      "url(https://assets.vogue.com/photos/589127a27edfa70512d62825/master/pass/square-300.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "hotpink";
    hero.style.color = "hotpink";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Catch up with a friend over a lunch date") {
    backGround.style.backgroundImage =
      "url(https://www.americangrit.com/wp-content/uploads/2017/02/dinner-date-gif.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Go stargazing") {
    backGround.style.backgroundImage =
      "url(https://cdn.lowgif.com/full/5e780fe7492a581c-starry-starry-night-gif-tumblr.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "white";
    hero.style.borderColor = "antiquewhite";
  } else if (
    display.innerText ===
    "Make a scrapbook with pictures of your favorite memories"
  ) {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/kDcgHzspFeJs4/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "lightpink";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn to greet someone in a new language") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/fOtA9hO1bNmaQ/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "antiquewhite";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Bake a pie with some friends") {
    backGround.style.backgroundImage =
      "url(https://media1.giphy.com/media/10EVeleaeHv7mo/source.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "red";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Make a to-do list for your week") {
    backGround.style.backgroundImage =
      "url(https://media1.giphy.com/media/h5FIFDs6rXLpWlWWZJ/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "darkpink";
    hero.style.borderColor = "pink";
  } else if (display.innerText === "Learn how to make an Alexa skill") {
    backGround.style.backgroundImage =
      "url(https://cdn.dribbble.com/users/16630/screenshots/3910913/echo_lightring_400x300.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "white";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Start a book you've never gotten around to reading"
  ) {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/WoWm8YzFQJg5i/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "red";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Donate blood at a local blood center") {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/XKTMEZ3abscosNZmJu/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "red";
    hero.style.borderColor = "black";
  } else if (display.innerText === "Rearrange and organize your room") {
    backGround.style.backgroundImage =
      "url(https://media1.giphy.com/media/3o7WIE14z2d66BJWJa/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "white";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn how to make a website") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/xT0Gqn9yuw8hnPGn5K/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "red";
    hero.style.borderColor = "lightyellow";
  } else if (display.innerText === "Watch a classic movie") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/JRDnL5qvmVptefmMAP/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "indianred";
    hero.style.color = "indianred";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Make a couch fort") {
    backGround.style.backgroundImage =
      "url(https://i.pinimg.com/originals/98/6c/f0/986cf0611764e9ab2dfc3a27adaa099a.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "red";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Plan a vacation you've always wanted to take"
  ) {
    backGround.style.backgroundImage =
      "url(https://media2.giphy.com/media/5ocAtoAPhIDcI/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "lightblue";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn origami") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/6NNRzppJkadQA/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "red";
    hero.style.color = "red";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Learn Javascript") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "red";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Watch the sunset or the sunrise") {
    backGround.style.backgroundImage =
      "url(https://media.giphy.com/media/UI1LUP61p3YYM/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "red";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Make homemade ice cream") {
    backGround.style.backgroundImage =
      "url(https://i.pinimg.com/originals/65/e8/98/65e8982e285be43ff602702e2482ac25.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "red";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Make a bucket list") {
    backGround.style.backgroundImage =
      "url(https://66.media.tumblr.com/fbfedd2b37fc2608004612e036c23923/tumblr_n867bsTjDV1rzgy8no1_400.gifv)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "red";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Create a personal website") {
    backGround.style.backgroundImage =
      "url(https://blog.gemfind.com/hubfs/Blog%20Images/web-development%202.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "indianred";
    hero.style.color = "red";
    hero.style.borderColor = "white";
  } else if (display.innerText === "Make a new friend") {
    backGround.style.backgroundImage =
      "url(https://media0.giphy.com/media/26FKYkTdlF4sx5xeM/giphy.gif)";
    display.style.backgroundColor = "white";
    display.style.borderColor = "antiquewhite";
    hero.style.color = "red";
    hero.style.borderColor = "white";
  } else {
    display.innerText;
  }
});
