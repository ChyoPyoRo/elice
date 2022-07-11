const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'www.google.com');
link.innerHTML = '역시 검색은 구글'

const msg = document.querySelector('p');

msg.setAttribute('class','success');
