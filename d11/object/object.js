//배달음식 앱의 사용자라고 가정
let user ={
    name:'홍길동',
    age : '30',
    email : 'blabla@naver.com',
    address : '서울',
    food : ['김치지개', '제육볶음'],

    payment : function() {
        console.log('배달이 시작되었습니다')
    },

     deliverystart : ()=>{
        console.log('배달이 시작 되었습니다.')
    },
}


console.log(user);