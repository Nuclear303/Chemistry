let url = window.location.href;

let folder = url.substring(0, url.lastIndexOf('/')) + '/';

let xhr = new XMLHttpRequest();
xhr.open('GET', folder + 'dane.xml', true);
xhr.onload = function() {
  let xml = xhr.responseXML;
  let budowa = xml.getElementsByTagName('budowa')[0].textContent;
  let wlasciwosci = xml.getElementsByTagName('wlasciwosci')[0].textContent;
  let reakcje = xml.getElementsByTagName('reakcje')[0].textContent;
  document.getElementById('budowa').innerHTML = budowa;
  document.getElementById('wlasciwosci').innerHTML = wlasciwosci;
  document.getElementById('reakcje').innerHTML = reakcje;
};
xhr.send();