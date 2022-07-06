function button1 (value) { 
    document.querySelector('#expression').innerHTML += value;
    //return을 하지 않아도 됨. innerHTML은 string을 반환하기 떄문에


}


function calculate(){

    let expression = document.querySelector("#expression").innerHTML

    console.log(expression)
    console.log(eval(expression))

    document.querySelector("#answer").innerHTML = eval(expression)
}