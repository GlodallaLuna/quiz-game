
let savedScore = sessionStorage.getItem("score");

let score = Math.floor(savedScore);

let scoreElement = document.querySelector("#score");
let message = document.querySelector(".score-title");
//let img = document.querySelector(".img")
let img = document.getElementById("image")

if(score >= 3) {
scoreElement.innerHTML = savedScore;
message.innerHTML = "YAY! you did well";
img.src="images/in-love.png";

} else {
    scoreElement.innerHTML = savedScore;
    message.innerHTML = "NAY! you need to practice more";
    img.src="images/dead.png";
}