//스크롤 움직이는 이벤트
    
let sections = document.querySelectorAll(".section")
let secStart = [];

for(let i=0; i < sections.length;i++){

    secStart[i] = sections[i].offsetTop;
}
// console.log(sections);

window.addEventListener("scroll",()=>{

    let scTop = window.scrollY
    // console.log(scTop);

    if(scTop > secStart[1] && scTop < secStart[2]){
        sections[1].classList.add("move");


    }
    else if(scTop > secStart[2] && scTop < secStart[3]){
        sections[2].classList.add("move");
    
    }
    else if(scTop > secStart[3] && scTop < secStart[4]){
        sections[3].classList.add("move");
    }    

});