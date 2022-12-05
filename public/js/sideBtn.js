let spanBtn = document.querySelector(".spanBtn");
let side = document.querySelector(".sideM");
let btn2 = document.querySelector(".btn2")

spanBtn.addEventListener("click",function(){
    side.classList.toggle("move");
    spanBtn.classList.toggle("chg");


});
btn2.addEventListener("click",function(){
    side.classList.toggle("move");
});



// 클릭할 모바일 1댑스 메뉴들
let mater = document.querySelectorAll(".mater > li"); // console.log(mGnb); 갯수를 확인한다.
// 2랩스 ul태그 높이값 각각 배열로 세팅

let mDepth2_height = [100,150,100,100];




for(let i=0; i<mater.length; i++){
    mater[i].addEventListener("click",function(){  //해당하는 1댑스 메뉴를 클릭하면
        
        if(mater[i].classList.contains("on")){ //클릭한 li태그 1댑스에 클래스 on이 있다면
        //접혀져 있는 메뉴를 눌러야함

        mater[i].querySelector(".mDepth2").style.height = "0px";
        mater[i].classList.remove("on");
        }
        else{
            //기존에 활성화 된 메뉴들 및 서브메뉴들 일괄적으로 다 비활성화!
            let onmGnb = document.querySelectorAll(".mater > li.on");
            for(let j = 0 ; j < onmGnb.length; j++){
                onmGnb[j].querySelector(".mDepth2").style.height = "0px";
                onmGnb[j].classList.remove("on");
            }

           //클릭한 1댑스 활성화 및 해당 서브메뉴만 등장    클래스 on이 안붙여진곳
           mater[i].querySelector(".mDepth2").style.height = mDepth2_height[i] + "px";
           mater[i].classList.add("on")
        }
        
        
       
       
    });
}