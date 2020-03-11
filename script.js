const button = document.querySelector("button");
const display = document.querySelector(".display");
const price = document.querySelector(".price");
const backGround = document.querySelector("body");
const hero = document.querySelector("h1");

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
    backGround.style.backgroundImage = "url()";
    display.style.backgroundColor = "lightgreen";
    display.style.borderColor = "slategray";
    hero.style.color = "lightgreen";
    hero.style.borderColor = "lightgreen";
  } else if (display.innerText === "Make origami") {
    backGround.style.backgroundImage = "url(https://imgur.com/xD8XeHM.gif)";
    display.style.backgroundColor = "purple";
    display.style.borderColor = "light purple";
    hero.style.color = "darkpurple";
    hero.style.borderColor = "lightpurple";
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
    hero.style.color = "darkpink";
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
    display.style.backgroundColor = "white";
    display.style.borderColor = "yellow";
    hero.style.color = "white";
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
    hero.style.borderColor = "white";
  } else if (display.innerText === "Watch the sunset or sunrise") {
    backGround.style.backgroundImage =
      "url(https://thumbs.gfycat.com/SelfassuredPopularAtlanticspadefish-size_restricted.gif)";
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
    hero.style.color = "black";
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
    backGround.style.backgroundImage = "url(https://imgur.com/k5WsG5S.gif)";
    display.style.backgroundColor = "pink";
    display.style.borderColor = "white";
    hero.style.color = "pink";
    hero.style.borderColor = "white";
  } else if (
    display.innerText === "Resolve a problem you've been putting off"
  ) {
    backGround.style.backgroundImage = "url()";
    display.style.backgroundColor = "pink";
    display.style.borderColor = "white";
    hero.style.color = "pink";
    hero.style.borderColor = "white";
  } else {
    display.innerText;
  }
});

// find pic for iceskate/rollerskate
// Make a simple musical instrument
// Learn a new programming language
// Plan a trip to another country
// Make bread from scratch
// Have a picnic with some friends
// Learn calligraphy
// Text a friend you haven't talked to in a long time
// Learn to play a new instrument
// Learn how to whistle with your fingers
// Make a budget
// Visit a nearby museum
// Learn the Chinese erhu
// Clean out your car
// Play a game of tennis with a friend
// Buy a new house decoration
// Clean out your garage
// Fill out a basketball bracket
// Take your cat on a walk
// Go to an escape room
// Find a charity and donate to it
// Go to a karaoke bar with some friends
// Listen to a new music genre
// Create a compost pile
// Learn Express.js
// Read a formal research paper on an interesting subject
// Go to a local thrift shop
// Bake pastries for you and your neighbor
// Go to a concert with some friends
// Repaint a room in your house
// Learn GraphQL
// Try a food you don't like
// Have a football scrimmage with some friends
// Go to the gym
// Learn woodworking
// Volunteer at a local animal shelter
// Have a photo session with some friends
// Watch a movie you'd never usually watch
// Go see a Broadway production
// Start a collection
// Create or update your resume
// Cook something together with someone
// Go see a movie in theaters with a few friends
// Meditate for five minutes
// Explore the nightlife of your city
// Learn how to french braid hair
// Take a bubble bath
// Pull a harmless prank on one of your friends
// Start a daily journal
// Hold a yard sale
// Volunteer at your local food pantry
// Learn how to write in shorthand
// Make tie dye shirts
// Learn to sew on a button
// Learn how to use an Arduino
// Take a class at your local community center that interests you
// Pick up litter around your favorite park
// Binge watch a trending series
// Go to the library and find an interesting book
// Learn how to use a french press
// Volunteer and help out at a senior center
// Start a blog for something you're passionate about
// Wash your car
// Surprise your significant other with something considerate
// Have a jam session with your friends
// Go swimming with a friend
// Go on a fishing trip with some friends
// Start a garden
// Come up with some business ideas
// Learn how the internet works
// Play basketball with a group of friends
// Fix something that's broken in your house
// Learn how to fold a paper crane
// Draw and color a Mandala
// Go to a concert with local artists with some friends
// Go for a run
// Bake a pie with some friends
// Learn to greet someone in a new language
// Make a scrapbook with pictures of your favorite memories
// Go stargazing
