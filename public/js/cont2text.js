let contt2text = [
    { 
        img:"/img/food7.jpg",
        img2:"/img/fo8.jpg",
        title:"SIGNATURE",
        title2 :"감성과 재미를 듬뿍 담아낸 시그니쳐 메뉴",
        img3:"/img/food4.jpg",
        img4:"/img/food5.jpg",
        img5:"/img/food6.jpg",
        img6:"/img/q8.jpg",
        img7:"/img/q17.jpg",
        img8:"/img/q10.jpg",
        title3:"시럽 바닐라",
        title4:"시럽 카라멜",
        title5:"크림 카라멜",
    },
    { 
        img:"/img/co8.jpg",
        img2:"/img/fo3.jpg",
        title:"음료",
        title2 :"고객의 라이프 스타일에 맞춰 더욱 다양하게 즐길수 있는 음료 라인업",
        img3:"/img/q14.jpg",
        img4:"/img/q20.jpg",
        img5:"/img/q21.jpg",
        img6:"/img/q11.jpg",
        img7:"/img/q12.jpg",
        img8:"/img/q13.jpg",
        title3:"시럽_바닐라빈",
        title4:"우유_오트밀",
        title5:"크림_흑임자",
    },
    { 
        img:"/img/food8.jpg",
        img2:"/img/fo6.jpg",
        title:"음식",
        title2 :"품질좋은 원료를 선별해,더욱 셈세하게 균형잡힌 풍미의 커피와 음식을 선사합니다.",
        img3:"/img/food1.jpg",
        img4:"/img/food2.jpg",
        img5:"/img/food3.jpg",
        img6:"/img/q14.jpg",
        img7:"/img/q15.jpg",
        img8:"/img/q16.jpg",
        title3:"크림_흑임자",
        title4:"시럽_바닐라빈",
        title5:"시럽_카라멜",
    },
];


const imagee = document.querySelector(".leftimage");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");
const image5 = document.querySelector(".image5");
const image6 = document.querySelector(".image6");
const image7 = document.querySelector(".image7");
const image8 = document.querySelector(".image8");
const title6 = document.querySelector(".title6");
const title7 = document.querySelector(".title7");
const title3 = document.querySelector(".title3");
const title4 = document.querySelector(".title4");
const title5 = document.querySelector(".title5");
const menulist = document.querySelectorAll(".menulist li");

menulist.forEach((item,index)=>{
    
    item.addEventListener("click",(e)=>{
        e.preventDefault();
        //좌측 배경이미지 변경  background-image:url(경로/파일명.jpg)
        imagee.style.backgroundImage = "url(" + contt2text[index].img + ")";
        
        image2.setAttribute("src",contt2text[index].img2);
        title6.innerHTML = contt2text[index].title;
        title7.innerHTML = contt2text[index].title2;
        image3.setAttribute("src",contt2text[index].img3);
        image4.setAttribute("src",contt2text[index].img4);
        image5.setAttribute("src",contt2text[index].img5);
        image6.setAttribute("src",contt2text[index].img6);
        image7.setAttribute("src",contt2text[index].img7);
        image8.setAttribute("src",contt2text[index].img8);
        title3.innerHTML = contt2text[index].title3;
        title4.innerHTML = contt2text[index].title4;
        title5.innerHTML = contt2text[index].title5;
        
    
        
        
        menulist.forEach((item,index)=>{
            item.classList.remove("on");
        }); 
        item.classList.add("on");
      
    });  
}); 





