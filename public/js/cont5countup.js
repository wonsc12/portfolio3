let listDatesd = [
    { 
        title:"결식아동에 기부된 우유",
        title2:"countUp2 count1",
        title3:"2022.09.30기준",
    },
    { 
        title:"불우이웃에 기부된 우유",
        title2:"countUp2 count2",
        title3:"2022.11.11기준",
    },
];


let centerfd = document.querySelector(".countup");
let list5 = "";

listDatesd.forEach(function(element){

    list5 += `<div class="count">
                <h2>${element.title}</h2>
                <div class="${element.title2}">
                <p class="pack">0</p>
                <p class="pdds">PACK</p>
                </div>
                <p class="dsef">${element.title3}</p>
              </div>`
});

centerfd.innerHTML = list5;




let countValue = [
    {
    plus:800,
    tag:".count1 p",
    complete:276422,
    loop:50   
},
{
    plus:1000,
    tag:".count2 p",
    complete:344055,
    loop:50   
},



];

let contStart = document.querySelector(".cont5").offsetTop;

let moveCheck = true;

window.addEventListener("scroll",function(){

    let scTop = window.scrollY;
    
    if(scTop >= contStart){

        if(moveCheck == true){

            countValue.forEach(function(el){

                countUp(el.plus,el.tag,el.complete,el.loop);
            });
        }
    }
});       

function countUp(inc,sel,des,speed){
moveCheck = false;

let num = 0;
let numChange = "";  //숫자 카운트 되는 것을 , 붙여서 변환되는 데이터를 받아주는 변수                           
let desChange = ""; //숫자 카운트 다끝나고 마지막 숫자를 ,붙여서  변환하고 담아주는 변수

let autoCount = setInterval(function(){

    num += inc;
    if(num >= des){
        clearInterval(autoCount);
         // 다 올라간 숫자
         desChange = des.toLocaleString("ko-kr");
        document.querySelector(sel).innerHTML = desChange;
    }
    else{
         // 다 증가된 숫자
         numChange = num.toLocaleString("ko-kr");
        document.querySelector(sel).innerHTML = numChange;
    }
},speed);
}
