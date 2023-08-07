//header , footer에 대한 js
// header 전체메뉴 스크립트 flow
// 1. open-nav 초기 숨기기
// 2. 햄버거메뉴(nav) 클릭 시 open-nav 출력
// 3. open-nav 안에 X버튼(nav_close) 클릭 시 open-nav숨기기
// 변수생성
const openNav= document.querySelector('#open_nav')
const closeNav= document.querySelector('#nav_close')
const nav1 = document.querySelector('#menu')
console.log(openNav, closeNav, nav1)
// 1. open-nav 초기 숨기기 #open_nav { transform:franslateX()} => 오른쪽으로 벗어나게하기.
openNav.style.transform = 'translateX(100%)';
// css값 상태에 따라 변경이 일어날 경우 애니메이션 transition
openNav.style.transition = 'transform 1s ease';
// 2. 햄버거메뉴(nav) 클릭 시 open-nav 출력
nav1.addEventListener('click',function(){
    openNav.style.transform = 'translateX(0)' 
    // display:none으로 숨김대상을 다시 보이게 할 경우
    //기존에 css에 넣은 display:flex로 정렬한 대상이면 display='flex'
    //기존 디자인CSS에 flex설정이 없었다면 display='block' 으로 설정한다. 
})
closeNav.addEventListener('click',function(){
    openNav.style.transform = 'translateX(100%)';
})
// swiper-slide open-nav 광고영역
const navAdver = new Swiper('#nav_adver',{
    direction:'horizontal',
    autoplay:{delay:1000},
    loop:true,
    navigation: {
        nextEl: '#nav_adver .swiper-button-next',
        prevEl: '#nav_adver .swiper-button-prev',
    },
})
