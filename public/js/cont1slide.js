 //왼쪽버튼 대상 
                    
 const prevBtn = document.querySelector(".prevBtn");

 // 오른쪽 버튼 대상
 const nextBtn = document.querySelector(".nextBtn");

 // 슬라이드 화면들 선택
 const silderView = document.querySelectorAll(".view > .turnapple");

 // 하단 동그라미 버튼들

 const circleBtn = document.querySelectorAll(".circleBtn > li");   

 // silder 는 버튼 이랑 동그라미 까지 다 포함되어 있음
 const silderWrap = document.querySelector(".silder");

  //슬라이드 순번값
  let sNumber = 0 ;

   //이전버튼 클릭시 

 prevBtn.addEventListener("click",function(){
     prevCheck(); //이전버튼 조건문 체크 함수 호출
     silderStart(); //슬라이드 화면 전환 및 동그라미 버튼 활성비활성 함수 호출
 });


 //이후 버튼 클릭시
 nextBtn.addEventListener("click",function(){
    nextCheck();
    silderStart(); //슬라이드 화면 전환 및 동그라미 버튼 활성비활성 함수 호출
 });  

 // 동그라미 버튼들 클릭시
 for(let j=0; j < circleBtn.length; j++){

     circleBtn[j].addEventListener("click",function(){
         sNumber = j; //클릭한 동그라미 버튼 순번값을 슬라이드 순번값으로 넣어줌
         silderStart(); //슬라이드 화면 동작함수 호출



     });
 }

 //슬라이드 자동실행구간
 let autoSiled = setInterval(function(){
     nextCheck(); // 다음화면 조건문 체크
     silderStart(); // 슬라이드 화면 전환되고 동그라미 버튼 활성 비활성


 },3000);

 //슬라이더에 마우스를 올렸을 때 자동실행을 멈춘다.
 silderWrap.addEventListener("mouseenter",function(){
     //autoside 변수에 있는 자동실행 함수를 제거시킴
     clearInterval(autoSiled); // 


 });

 //슬라이더에 마우스를 내렸을 때 자동실행을 다시 동작하게 처리
 silderWrap.addEventListener("mouseleave",function(){
     //autosile 변수에 자동실행 함수를 다시 새롬게 대입해서 채워줌
     autoSiled = setInterval(function(){

         nextCheck();
         silderStart();
     },3000);

 });
 
 // 이전버튼 슬라이드 조건문 함수구간
 function prevCheck(){

     if(sNumber == 0){
         sNumber = silderView.length-1;
     }
     else{
         sNumber--;
     }
 }
     // 이후버튼 슬라이드 조건문 함수구간
 function nextCheck(){

     if(sNumber == silderView.length-1){
         sNumber = 0;
     }
     else{
         sNumber++;
     }
 }
                 
 // 슬라이드 나타나고 사라지는  & 동그라미버튼 활성비활성 함수구간
 function silderStart(){
     for(let i = 0; i < circleBtn.length; i++){
         circleBtn[i].classList.remove("on");
         silderView[i].style.opacity = 0;
         silderView[i].style.zIndex = 2;
     }

     circleBtn[sNumber].classList.add("on");
     silderView[sNumber].style.opacity = 1;     //z indent ,opacity 단위없음
     silderView[sNumber].style.zIndex = 3;
     
 }