const getJson = (callback) =>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', ()=>{
        if(request.readyState === 4 && request.status===200){
            console.log(request.responseText);
            callback();
        }else if(request.readyState === 4){
            console.log('gggggggggggggg')
            callback();
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();
}

getJson(()=>{
    console.log('callback')
})