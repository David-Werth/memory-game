const card = document.querySelectorAll(".card");
const score = document.getElementById("score");
let dogType = [];
let cardList = [];
let flipCount = 0;
let scoreCount = 0;

// Score Counter
function scoreCounter() {
  score.innerHTML = `Score: ${scoreCount}`;
}

// Click Event Listener
card.forEach((card) => {
  card.addEventListener("click", () => {
    if (flipCount < 2) {
      flipCard(card);
    }
  });
});

// Card Flip Action
function flipCard(card) {
  card.classList.add("card-flip");
  dogType.push([card.getAttribute("data-dog")]);
  cardList.push(card.id);
  flipCount = flipCount + 1;
  if (flipCount === 2) {
    check(card);
  }
}

// Check if Cards match
function check(card) {
  let dogString1 = dogType[0].toString();
  let dogString2 = dogType[1].toString();
  setTimeout(() => {
    if (dogString1 === dogString2) {
      flipCount = 0;
      dogType = [];
      cardList = [];
      scoreCount = scoreCount + 1;
      scoreCounter();
    } else if (dogString1 !== dogString2) {
      cardList.forEach((id) => {
        document.getElementById(id).classList.remove("card-flip");
      });
      flipCount = 0;
      dogType = [];
    }
  }, 700);
}
