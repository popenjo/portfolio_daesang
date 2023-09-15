// 오픈 버튼 생성
const menu_btn = document.querySelector('.menu_btn')
console.log(menu_btn)

// 나가기 버튼 생성
const menu = document.querySelector('.menu_all')
const closer = document.querySelector('.closer')
console.log(menu, closer)

menu.style.transform = 'translateY(-100%)';
menu.style.transition = 'transform 0.1s ease'

// 메뉴 클릭시 메뉴 창 오픈
menu_btn.addEventListener('click',function(){
    menu.style.transform = 'translateY(0%)';
    menu.style.transition = 'transform 0.8s ease'
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

// 스크롤 시 검색 창 숨기기
window.addEventListener('scroll', function () {
    search_page.style.transform = 'translateY(-100%)';
});

const search_page = document.querySelector('.searchpage')
const search_closer = document.querySelector('#search_closer')
const search_btn = document.querySelector('#search_btn')
console.log(search_page,  search_closer, search_btn)

search_page.style.transform = 'translateY(-100%)';
search_page.style.transition = 'transform 0.1s ease'

// 검색 창 클릭시 메뉴 창 오픈
search_btn.addEventListener('click',function(){
    search_page.style.transform = 'translateY(0%)';
    search_page.style.transition = 'transform 0.8s ease'
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
