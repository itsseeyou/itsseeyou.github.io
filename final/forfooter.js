

// Get the modal
var ft_modal_a = document.getElementById("AboutModal_a");

// Get the button that opens the modal
var ft_btn_a = document.getElementById("AboutUsBtn-a");

// Get the <span> element that closes the modal
var ft_span_a = document.getElementsByClassName("ft_close_a")[0];

// When the user clicks on the button, open the modal
ft_btn_a.onclick = function () {
  // modal_a.style.display = "block";
  $(ft_modal_a).fadeIn(450);
}

// When the user clicks on <span> (x), close the modal
ft_span_a.onclick = function () {
  ft_modal_a.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == ft_modal_a) {
    ft_modal_a.style.display = "none";
  }
}