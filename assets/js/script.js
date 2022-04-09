const ratings = document.querySelectorAll(".note");
const submit = document.querySelector(".submit");
const front = document.querySelector(".card--state_rating");
const back = document.querySelector(".card--state_thanks");
const ratingResult = document.querySelector(".rating--result");
let result;

const changeActive = (e) => {
  [...ratings].forEach((note) => note.classList.remove("selected"));
  result = e.target.innerHTML;
  e.target.classList.add("selected");
};

[...ratings].forEach((e) => e.addEventListener("click", changeActive));

function submitRate() {
  if (result != null) {
    ratingResult.innerHTML = result;
    front.style.display = "none";
    back.style.display = "block";
  }
}

submit.addEventListener("click", submitRate);
