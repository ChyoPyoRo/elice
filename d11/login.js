const form = document.querySelector('.login-form')
const feedback = document.querySelector('.feedback')


const reqexp = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e=> {
    e.preventDefault();//button 클릭시 동작되는 기본동작을 막아줌
    console.log(form.username.value)
    const username=form.username
    
})


form.username.addEventListener('keyup', e=>{
    if(reqexp.test(e.target.value)){
        feedback.textContent='환영합니다';
    } else{
        feedback.textContent='영문 6~12자로 적어주셔야 합니다'
    }
});