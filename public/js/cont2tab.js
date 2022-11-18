// const tabMenus = document.querySelectorAll(".sbcmenu .menulist li");
// const tabcenter = document.querySelectorAll(".tabcenter");
// const leftimage = document.querySelectorAll(".leftimage");
// const tabb = document.querySelector(".tabb")

// sNumber = 0 ;

// tabComponent(tabMenus,tabcenter);   //첫번째 tab메뉴들 인자값으로 보내줄것들 *tabMenus1,tabConts1 


// function tabComponent(menus,conts){     //매개변수를 담아야함   -menus 0123    -conts 0123   1번     1번,2번이 동시에 작동할수 있음
//     //매개변수랑 인자값     
//     console.log(conts);

//     for(let i = 0 ; i < menus.length; i++){     
//         menus[i].addEventListener("click",function(){

//             //버튼 전부 비활성 비활성화 작업구간

//             for(let j = 0 ; j < menus.length; j++){
//                 event.preventDefault();
//                 menus[j].classList.remove("on");
//                 conts[j].style.display = "none";
                
//                 }
//                 //콘텐츠 사라지고 하나만 나타나는 구간
//                 menus[i].classList.add("on");
//                 conts[i].style.display = "flex";
                

//         });
//     }
// } 
// tabMenus.addEventListener("click",function(){
//     if(sNumber == leftimage.length-1){
//         sNumber = 0;
//     }
//     else{
//         sNumber++;
//     }

//     leftimage.style.marginLeft = -100 * sNumber + "%";

// });
