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