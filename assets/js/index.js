const speed = 120;
const text = 'console.log(nome);';
let i = 0;

function typeWritter(){
  if (i < text.length ) {
    document.querySelector('.typewritter').innerHTML += text.charAt(i);
    i++;
    
    setTimeout(typeWritter, speed);
  }
}

function showName() {
  setTimeout(() => {
    document.querySelector('.title').style.opacity = "1";
  }, 2168);
}