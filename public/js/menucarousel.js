// 캐러셀 움직이는 대상 및 순서변경될때 감싸는 부모역할
const ca_move = document.querySelector(".ca_move");
const prevBtn2 = document.querySelector(".ca_prev");
const nextBtn2 = document.querySelector(".ca_next");

// 화면 사이즈에 따라 marginLeft값 / 원위치되는 수치값 변경
let prevChangeMargin;
let setMargin;

let browserSizeCheck = ()=>{
    if(window.matchMedia("screen and (min-width:1601px)").matches){
        prevChangeMargin = "-50%"; // 이전버튼 클릭시 이동되는 거리값
        setMargin = "-25%"; // 이동후 원위치되는 수치값
    }
    else if (window.matchMedia("screen and (max-width:1600px)and (min-width:1025px)").matches){
        prevChangeMargin = "-66.666666%"; // 이전버튼 클릭시 이동되는 거리값
        setMargin = "-33.333333%"; // 이동후 원위치되는 수치값
    }
    else if (window.matchMedia("screen and (max-width:1024px)and (min-width:769px)").matches){
        prevChangeMargin = "-100%"; // 이전버튼 클릭시 이동되는 거리값
        setMargin = "-50%"; // 이동후 원위치되는 수치값
    }
    else if (window.matchMedia("screen and (max-width:768px)").matches){
        prevChangeMargin = "-200%"; // 이전버튼 클릭시 이동되는 거리값
        setMargin = "-100%"; // 이동후 원위치되는 수치값
    }
    // 리사이즈 / 로드 했을 때 원위치 되는 값 ca_move 작용
    ca_move.style.marginLeft =setMargin;
}

window.addEventListener("resize",()=>{
    browserSizeCheck(); // 웹브라우저 창 크기 조절시  조건문 체크
    //preveChangeMargin / setMargin 값이 변경처리

});

window.addEventListener("load",()=>{
    browserSizeCheck(); // 웹브라우저 창 크기 조절시  조건문 체크
    //preveChangeMargin / setMargin 값이 변경처리
});


// prev 클릭시 캐러셀 이동후 순서 교체후 원위치 시키는 작업까지
prevBtn2.addEventListener("click",()=>{
    ca_move.style.transition = "all 0.5s"
    ca_move.style.marginLeft = prevChangeMargin;  //  -50%   -66.666666%  -100% -200%
    // prevBtn.style.display = "none"
    // nextBtn.style.display = "none"
    // 이전버튼 클릭시 첫번째 자식요소 선택
    let fchild = ca_move.firstElementChild; //<div class="ca_child"><img src="image/se2_img01.jpg"></div>

    setTimeout(()=>{ // 700초 뒤에 아래 기능들 실행
        // 첫번째 자식요소를 마지막번째로 보내줌
        ca_move.append(fchild);
        // 태그순서 교체후 원위치
        ca_move.style.transition = "none"
        ca_move.style.marginLeft = setMargin;    //  -25% -33.333333%  -50% -100%
        // prevBtn.style.display = "block"
        // nextBtn.style.display = "block"
    },700)
});

// next 클릭시 캐러셀 이동후 순서 교체후 원위치 시키는 작업까지

nextBtn2.addEventListener("click",()=>{
    ca_move.style.transition = "all 0.5s"
    ca_move.style.marginLeft = "0%";
    // prevBtn.style.display = "none"
    // nextBtn.style.display = "none"
    // 이후버튼 클릭시 마지막번째 자식요소 선택
    let lchild = ca_move.lastElementChild; //<div class="ca_child"><img src="image/se2_img01.jpg"></div>

    setTimeout(()=>{ // 700초 뒤에 아래 기능들 실행
        // 첫번째 자식요소를 마지막번째로 보내줌
        ca_move.prepend(lchild);
        // 태그순서 교체후 원위치
        ca_move.style.transition = "none"
        ca_move.style.marginLeft = setMargin;     // -25% 33.333333% -50% -100%
        // prevBtn.style.display = "block"
        // nextBtn.style.display = "block"
    },700)
});