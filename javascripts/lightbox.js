function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slides = document.getElementsByClassName("mySlides");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  var newIndex = slideIndex += n;

  handleDisabled(newIndex);

  showDivs(newIndex);
}

function showDivs(n) {
  var i;
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function handleDisabled(newIndex) {
  prevBtn.disabled = false;
  nextBtn.disabled = false;

  if (newIndex === slides.length) {
    nextBtn.disabled = true;
  } else if (newIndex === 1) {
    prevBtn.disabled = true;
  }
}