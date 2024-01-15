var body = document.body;
var element = document.getElementsByClassName('floating-contact')[0];

document.addEventListener("scroll", function() {
    var scrollAmt = window.pageYOffset || document.documentElement.scrollTop;
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    console.log(top > 1100);
  if(top > 1100) {
    element.style.position = 'sticky';
    element.style.bottom = '40px';
  } else {
    element.style.position = 'absolute';
    element.style.bottom = '-1100px';
  }
}); 

function onSend(e) {
  e.preventDefault()
}