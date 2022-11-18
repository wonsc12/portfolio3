let login = document.querySelector(".login");

let menu = document.querySelector(".menu");
 
let menugnb = document.querySelectorAll(".menugnb > li");

let gnbBg = document.querySelector(".gnbbg");


menu.addEventListener("mouseenter",function(){
    for(let i=0; i < menugnb.length; i++){
          
            menugnb[i].classList.add("on");
        
    }
    gnbBg.classList.add("on");
    login.classList.add("on");
});

menu.addEventListener("mouseleave",function(){

    for(let i=0; i< menugnb.length; i++){
        
        menugnb[i].classList.remove("on");
        menugnb[i].style.transition = "all 1.5s"
    }
    gnbBg.classList.remove("on");
    login.classList.remove("on");
});




