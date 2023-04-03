let url = window.location.href;

let folder = url.substring(0, url.lastIndexOf('/')) + '/';

let xhr = new XMLHttpRequest();
xhr.open('GET', folder + 'dane.xml', true);
xhr.onload = function() {
  let xml = xhr.responseXML;
  let general = xml.getElementsByTagName('general')[0].textContent;
  let budowa = xml.getElementsByTagName('budowa')[0].textContent;
  let wlasciwosci = xml.getElementsByTagName('wlasciwosci')[0].textContent;
  let zastosowanie = xml.getElementsByTagName('zastosowanie')[0].textContent;
  document.querySelector('.general').innerHTML = general;
  document.querySelector('.budowa').innerHTML = budowa;
  document.querySelector('.wlasciwosci').innerHTML = wlasciwosci;
  document.querySelector('.reakcje').innerHTML = zastosowanie;
};
xhr.send();