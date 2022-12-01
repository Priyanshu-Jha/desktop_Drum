
for(var i = 0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){


    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
  });
}
document.addEventListener("keydown",function(event){
  // console.log(event.key);
  makeSound(event.key);
});


function makeSound(key){
  buttonAnimation(key);
  switch (key) {
    case "w":
    var audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
    var audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
    var audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
    var audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
    var audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
    var audio = new Audio("sounds/crash.mp3");
      break;
    default:
    var audio = new Audio("sounds/kick-bass.mp3");
      break;
  }
  audio.play();
}

function buttonAnimation(pressedKey){
    var pressedButton = document.querySelector("." + pressedKey);
    pressedButton.classList.add("pressed")

    setTimeout(function(){
      pressedButton.classList.remove("pressed");
    },100);
}
