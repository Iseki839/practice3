'use script';

var marker = document.querySelector('#marker');
var item = document.querySelectorAll('nav a');
var b = document.querySelector("body");
var n = document.querySelector("nav");

function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

item.forEach (link => {
  link.addEventListener('click', (e)=> {
    indicator(e.target);
  });

  item[0].addEventListener('click', () => {
    b.style.setProperty("--color", "#050801");
    n.style.setProperty("--colorN", "#03e9f4");
  });
  item[1].addEventListener('click', () => {
    b.style.setProperty("--color", "#F0FFFF");
    n.style.setProperty("--colorN", "#7CFC00");
  });
  item[2].addEventListener('click', () => {
    b.style.setProperty("--color", "#FF4500");
    n.style.setProperty("--colorN", "#FFFF44");
  });
  item[3].addEventListener('click', () => {
    b.style.setProperty("--color", "#2F4F4F");
    n.style.setProperty("--colorN", "#FFFAFA");
  });

})