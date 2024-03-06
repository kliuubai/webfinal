function modals() {
// SPANISH MODAL
// Get the modal
var spanishModal = document.getElementById("spanishModal");

// Get the button that opens the modal
var spanishBtn = document.getElementById("spanishBtn");

// Get the <span> element that closes the modal
var spanishSpan = document.getElementById("spanishClose");

// When the user clicks on the button, open the modal
spanishBtn.onclick = function() {
  spanishModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanishSpan.onclick = function() {
  spanishModal.style.display = "none";
}

// WEB MODAL
// Get the modal
var webModal = document.getElementById("webModal");
    
// Get the button that opens the modal
var webBtn = document.getElementById("webBtn");

// Get the <span> element that closes the modal
var webSpan = document.getElementById("webClose");

// When the user clicks on the button, open the modal
webBtn.onclick = function() {
  webModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
webSpan.onclick = function() {
  webModal.style.display = "none";
}

// SCIENCE MODAL
// Get the modal
var sciModal = document.getElementById("sciModal");
    
// Get the button that opens the modal
var sciBtn = document.getElementById("sciBtn");

// Get the <span> element that closes the modal
var sciSpan = document.getElementById("sciClose");

// When the user clicks on the button, open the modal
sciBtn.onclick = function() {
  sciModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
sciSpan.onclick = function() {
  sciModal.style.display = "none";
}

}


window.onload = modals;

