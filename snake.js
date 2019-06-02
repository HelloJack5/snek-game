const cvs = document.getElementById("snake");

const ctx = cvs.getContext("2d");

//create unit
const box = 32;

//load images

const ground = new Image();
ground.src = "img/food.png"

//create snek

let snake = [];
    snake[0] = {
        x : 9 * box,
        y : 10 * box
    }

    //create food

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box,
}

//create score
let score = 0;