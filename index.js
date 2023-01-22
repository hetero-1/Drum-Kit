//  document.querySelector
//  (".sounds").addEventListener("click",handle);
//it works but you can't set a particular sound for each
for(var i=0; i<(document.querySelectorAll("button")).length; i++)
{
   document.querySelectorAll("button")[i].addEventListener("click", function(){
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
      headingChange(buttonInnerHTML);

   });

   document.addEventListener("keydown", function(Event){
      makeSound(Event.key);
      buttonAnimation(Event.key);
      headingChange(Event.key);
   }); 
}



function makeSound(key){
   switch(key){
      case "l":
         audio  = new Audio("sounds/crash.mp3");
         audio.play();
         break;
      case "d":
         audio  = new Audio("sounds/kick-bass.mp3");
         audio.play();
         break;
      case "s":
         audio  = new Audio("sounds/snare.mp3");
         audio.play();
         break;
      case "a":
         audio  = new Audio("sounds/tom-1.mp3");
         audio.play();
         break;
      case "j":
         audio  = new Audio("sounds/tom-2.mp3");
         audio.play();
         break;
      case "k":
         audio  = new Audio("sounds/tom-3.mp3");
         audio.play();
         break;
      case "w":
         audio  = new Audio("sounds/tom-4.mp3");
         audio.play();
         break;
      }
   }  

   function buttonAnimation(currentKey){
      var activeButton = document.querySelector("." + currentKey);
      activeButton.classList.add("pressed");
      setTimeout(function(){
         activeButton.classList.remove("pressed");
      },100);
   }

   function headingChange(currentKey){
      document.querySelector("h1").style.color = "red";
      setTimeout(function(){
      document.querySelector("h1").style.color = "black";
      },100);
   }