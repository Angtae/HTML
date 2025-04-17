const NUM_OF_ITEMS_PER_PAGE = 20;
let start = 0;
let end =  start + NUM_OF_ITEMS_PER_PAGE;

async function loading(){
    // 1-1. 백엔드 요청 fetch
    const res = await fetch(`/get-Items?start=${start}&end=${end}`)
    const data = await res.json();
    // 1-2. 데이터 받아 res.
    console.log(data);
    const myContainer = document.getElementById('scroll-container');

    data.forEach((d) => {
        const item = document.createElement('div');
        item.textContent = d;
        item.classList.add('item');
        myContainer.appendChild(item);
    })  


    start = end;
    end += NUM_OF_ITEMS_PER_PAGE;
}
document.addEventListener('DOMContentLoaded',()=>{

    loading();
});

window.addEventListener('scroll',() => {
    // console.log('윈도우 높이 ' , window.innerHeight);
    // console.log('스크롤위치 ' , window.scrollY);
    const endOfScroll = (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight);
    console.log("화면끝?", endOfScroll);
    if(endOfScroll){
        loading();
    }
});