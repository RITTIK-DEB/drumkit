let n=document.querySelectorAll(".img1").length;
let k=document.addEventListener("keypress",function(event){
        msound(event.key);
        buttonAnimation(event.key);
})

for(let i=0;i<n;i++){
    document.querySelectorAll(".img1")[i].addEventListener("click",function(){
        let h=this.innerHTML;
        msound(h);
        let cl=this.getAttribute('class');
        cl=cl.slice(5,6);
        console.log(cl);
        buttonAnimation(cl);
    });  
}

function msound(key){
    let t=key;
if(t.match("a")){
    console.log("hell");
    let aud=new Audio("sounds/crash.mp3");
    aud.play();

}
else if(t.match("s")){
    console.log("hell");
    let auds=new Audio("sounds/kick-bass.mp3");
    auds.play();
}
else if(t.match("d")){
    console.log("hell");
    let audd=new Audio("sounds/snare.mp3");
    audd.play();
}
else if(t.match("f")){
    console.log("hell");
    let audff=new Audio("sounds/tom-1.mp3");
    audff.play();
}
else if(t.match("g")){
    console.log("hell");
    let audg=new Audio("sounds/tom-2.mp3");
    audg.play();
}
else if(t.match("h")){
    console.log("hell");
    let audh=new Audio("sounds/tom-3.mp3");
    audh.play();
}
else if(t.match("j")){
    console.log("hell");
    let audj=new Audio("sounds/tom-4.mp3");
    audj.play();
}
else{
    console.log("hi");
}

}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector(".".concat(currentKey));
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }