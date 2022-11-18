const silderView2 = document.querySelectorAll(".box10");

const circleBtn2 = document.querySelectorAll(".circleBtn2 > li");   

const silderWrap2 = document.querySelector(".silder");

let sNumber2 = 0;



for(let j=0; j < circleBtn2.length; j++){

    circleBtn2[j].addEventListener("click",function(e){
        e.preventDefault();
        sNumber2 = j; //클릭한 동그라미 버튼 순번값을 슬라이드 순번값으로 넣어줌
        silderStart2(); //슬라이드 화면 동작함수 호출
    });
}

let autoSiled2 = setInterval(function(){
    nextCheck2();
    silderStart2(); // 슬라이드 화면 전환되고 동그라미 버튼 활성 비활성

},3000);


    silderWrap2.addEventListener("mouseenter",function(){
        //autoside 변수에 있는 자동실행 함수를 제거시킴
        clearInterval(autoSiled2); // 


    });

    silderWrap2.addEventListener("mouseleave",function(){
        //autosile 변수에 자동실행 함수를 다시 새롬게 대입해서 채워줌
        autoSiled2 = setInterval(function(){

            nextCheck2();
            silderStart2();
        },3000);

    });

    function nextCheck2(){

        if(sNumber2 == silderView2.length-1){
            sNumber2 = 0;
        }
        else{
            sNumber2++;
        }
    }

    function silderStart2(){

        for ( let i = 0 ; i < circleBtn2.length; i++){
            circleBtn2[i].classList.remove("on");
            silderView2[i].style.opacity = 0;
            silderView2[i].style.zIndex = 2;
        }

        circleBtn2[sNumber2].classList.add("on");
        silderView2[sNumber2].style.opacity = 1;
        silderView2[sNumber2].style.zIndex = 3;
    }