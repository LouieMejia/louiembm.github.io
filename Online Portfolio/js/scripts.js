$(document).ready(function(){
    $('.menu-toggle').on('click',function(){
        $('.menu').toggleClass('showing');
        $('.menu ul').toggleClass('showing');
    });
    
    
$('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow:$('.next'),
  prevArrow:$('.prev')
});
      
});


var i = 0;
var x = 0;
var y = 0;
var a = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myCom");
    var width = 40;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 85) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }

  if (x == 0) {
   x = 1;
    var elem1 = document.getElementById("myJ");
    var width1 = 40;
    var id1 = setInterval(frame1, 40);
    function frame1() {
      if (width1 >= 60) {
        clearInterval(id1);
        x = 0;
      } else {
        width1++;
        elem1.style.width = width1 + "%";
        elem1.innerHTML = width1  + "%";
      }
    }
  }

  if (y == 0) {
    y = 1;
    var elem2 = document.getElementById("myWB");
    var width2 = 40;
    var id2 = setInterval(frame2, 30);
    function frame2() {
      if (width >= 65) {
        clearInterval(id2);
        y = 0;
      } else {
        width2++;
        elem2.style.width = width2 + "%";
        elem2.innerHTML = width2  + "%";
      }
    }
  }

  if (a == 0) {
    a = 1;
    var elem3 = document.getElementById("myVE");
    var width3 = 40;
    var id3 = setInterval(frame3, 50);
    function frame3() {
      if (width3 >= 45) {
        clearInterval(id3);
        a = 0;
      } else {
        width3++;
        elem3.style.width = width3 + "%";
        elem3.innerHTML = width3  + "%";
      }
    }
  }
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var btn = document.getElementById("myBtn");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}