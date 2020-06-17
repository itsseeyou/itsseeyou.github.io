
//a for 必備單品; b for 重質不重量; c for 重複穿搭
// Get the modal
var modal_a = document.getElementById("myModal_a");
var modal_b = document.getElementById("myModal_b");
var modal_c = document.getElementById("myModal_c");

// Get the button that opens the modal
var btn_a = document.getElementById("modalBtn_a");
var btn_b = document.getElementById("modalBtn_b");
var btn_c = document.getElementById("modalBtn_c");

// Get the <span> element that closes the modal
var span_a = document.getElementsByClassName("close_a")[0];
var span_b = document.getElementsByClassName("close_b")[0];
var span_c = document.getElementsByClassName("close_c")[0];

// When the user clicks on the button, open the modal
btn_a.onclick = function() {
  // modal_a.style.display = "block";
	$(modal_a).fadeIn(450);
}
btn_b.onclick = function() {
  	$(modal_b).fadeIn(450);
}
btn_c.onclick = function() {
 	$(modal_c).fadeIn(450);
}

// When the user clicks on <span> (x), close the modal
span_a.onclick = function() {
  modal_a.style.display = "none";
}
span_b.onclick = function() {
  modal_b.style.display = "none";
}
span_c.onclick = function() {
  modal_c.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_a) {
    modal_a.style.display = "none";
  }
  if (event.target == modal_b) {
    modal_b.style.display = "none";
  }
  if (event.target == modal_c) {
    modal_c.style.display = "none";
  }
}