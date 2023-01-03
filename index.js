// for dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;//random number between 1 to 6 and concateation of string.

var randomDiceImage = "dice" + randomNumber1 + ".png";//random image dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage;//images/dice1.png-images/dice6.png

var image1 = document.querySelectorAll("img")[0];//query selector for random image

image1.setAttribute("src", randomImageSource);//changing the inner html

// for dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;//random number between 1 to 6 and concateation of string.

var randomDiceImage2="dice"+randomNumber2+".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// condition for winning check
if (randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "🏆 Modi Ji Wins!";
}
else if (randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "🏆 Rahul Wins!";
}
else
{
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
