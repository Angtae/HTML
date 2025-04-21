console.log('로딩완료');
//미션1. 백엔드에 요청해서 데이터를 받아와서 화면에 랜더링한다.
// 백엔드를 요청한다 fetch
// 데이터를 받아온다 res.xxxx
// 화면에 랜더링한다다 dom..xxxx


// 미션1. 백엔드에 요청해서 데이터를 받아와서 화면에 랜더링한다.
fetch('/get-items')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const myContainer = document.getElementById('scroll=container');
      const item = document.createElement('div');
      item.textContent = data
      myContainer.appendChild(item);
    })
    // .catch(error => {
    //     console.error('데이터 로드 실패:', error);
    //     alert('서버로부터 데이터를 불러오지 못하였습니다.');
    // });
