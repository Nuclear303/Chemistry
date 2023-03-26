let base = window.location.href.substring(0, window.location.href.indexOf('/', 8)) + '/';

if(base == "https://nuclear303.github.io/"){
  base = window.location.href.substring(0, window.location.href.indexOf('/', base.length)) + '/';
}


let http = new XMLHttpRequest();
http.open('GET', base + 'footer.html', true);
http.onload = function() {
  console.log(http.responseText)
  document.querySelector("footer").innerHTML = http.responseText;
};
http.send();
