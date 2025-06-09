// for buttun click
for( let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      // console.log(this.innerHTML)
      let button = this.innerHTML;
      makesound(button);
      buttonanimation(button)

    })
}

// keypress detector
document.addEventListener("keypress",function(event){
    makesound(event.key)
    buttonanimation(event.key)
})

function makesound(operation){
    switch (operation) {
        case 'w':
            let audio1= new Audio("sounds/tom-1.mp3")
            audio1.play();
            
            break;
            case 'a':
            let audio2= new Audio("sounds/tom-2.mp3")
            audio2.play();
            
            break;
            case 's':
            let audio3= new Audio("sounds/tom-3.mp3")
            audio3.play();
            
            break;
            case 'd':
            let audio4= new Audio("sounds/tom-4.mp3") // CONSTRUCTOR FUNCTION
            audio4.play();
            
            break;
            case 'j':
            let audio5= new Audio("sounds/snare.mp3")
            audio5.play();
            
            break;
            case 'k':
            let audio6= new Audio("sounds/crash.mp3")
            audio6.play();
            
            break;
            case 'l':
            let audio7= new Audio("sounds/kick-bass.mp3")
            audio7.play();
            
            break;
         default: console.log(this)
            break;
      }
      

}

function buttonanimation(currentkey){
    let activebutton= document.querySelector("."+ currentkey)
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed")


    },50)

    

}