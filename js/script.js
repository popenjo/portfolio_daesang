// 버튼 누를시 상단으로 이동
const up = document.querySelector('#scrolltop')
console.log(up)

up.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // 스크롤을 부드럽게 이동
    });
});

// 오픈 버튼 생성
const menu_btn = document.querySelector('.menu_btn')
console.log(menu_btn)

// 나가기 버튼 생성
const menu = document.querySelector('.menu_all')
const closer = document.querySelector('.closer')
console.log(menu, closer)

menu.style.display = 'none';
menu.style.transition = 'transform 0.8s ease'

// 메뉴 클릭시 메뉴 창 오픈
menu_btn.addEventListener('click',function(){
    menu.style.display = 'block'
    menu.style.transform = 'translateY(0%)';
})
// closer 클릭 시 메뉴창 없어지기
closer.addEventListener('click',function(){
    menu.style.transform = 'translateY(-100%)';

    // 모든 디테일 요소의 상태를 숨겨진 상태로 설정합니다.
    isDetailsVisible.fill(false);
})
// 스크롤 시 메뉴창 숨기기
window.addEventListener('scroll', function () {
    menu.style.transform = 'translateY(-100%)';
});

const search_page = document.querySelector('.searchpage')
const search_closer = document.querySelector('#search_closer')
const search_btn = document.querySelector('#search_btn')
console.log(search_page,  search_closer, search_btn)

search_page.style.display = 'none';
search_page.style.transition = 'transform 0.8s ease'

// 검색 창 클릭시 메뉴 창 오픈
search_btn.addEventListener('click',function(){
    search_page.style.display = 'block'
    search_page.style.transform = 'translateY(0%)';
})
// closer 클릭 시 검색창 없어지기
search_closer.addEventListener('click',function(){
    search_page.style.transform = 'translateY(-100%)';

    // 모든 디테일 요소를 숨깁니다.
    detailsLists.forEach((detailsList, index) => {
        detailsList.style.display = 'none';
        groupImgs[index].style.transform = 'rotate(0deg)';
    });

    // 모든 디테일 요소의 상태를 숨겨진 상태로 설정합니다.
    isDetailsVisible.fill(false);
})

// 스크롤 시 검색 창 숨기기
window.addEventListener('scroll', function () {
    search_page.style.transform = 'translateY(-100%)';
});

// 스크롤 시 한 섹션식 이동
// window.onload = function () {
//     const sections = document.querySelectorAll('.section'); // .section 클래스를 가진 모든 요소 선택
//     const totalSections = sections.length;
    
//     sections.forEach(function (section, index) {
//         section.addEventListener('mousewheel', function (event) {
//             event.preventDefault();
//             let delta = 0;

//             if (!event) event = window.event;
//             if (event.wheelDelta) {
//                 delta = event.wheelDelta / 120;
//                 if (window.opera) delta = -delta;
//             } else if (event.detail)
//                 delta = -event.detail / 3;

//             let moveTop = window.scrollY;
            
//             // wheel down : move to next section
//             if (delta < 0) {
//                 if (index !== totalSections - 1) {
//                     try {
//                         moveTop = sections[index + 1].getBoundingClientRect().top + window.scrollY;
//                     } catch (e) { }
//                 }
//             }
//             // wheel up : move to previous section
//             else {
//                 if (index !== 0) {
//                     try {
//                         moveTop = sections[index - 1].getBoundingClientRect().top + window.scrollY;
//                     } catch (e) { }
//                 }
//             }

//             window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' });
//         });
//     });
// }
