
let loadBtn = document.querySelector(".loadMore"); 
let listt = document.querySelectorAll(".listt");  
let startIndex = 3; 



loadBtn.addEventListener("click",function(){
    
    for(let i = startIndex ; i < startIndex + 3 ; i++){
        listt[i].style.display = "block";

    }
   
    startIndex = startIndex + 3;

   
    if(startIndex >= listt.length){
        loadBtn.style.display = "none";
    }
   

})