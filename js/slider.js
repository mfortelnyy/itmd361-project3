var slideIndex = 1;
slider(); 
   
function slider()
{
  var i =0;;
  let slides = document.getElementsByClassName("collumnslider");
  for (i; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(slider, 5000); 
}