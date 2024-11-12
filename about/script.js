// Get the modal, button, and close button elements
var modal = document.getElementById("popupModal");
var btn = document.getElementById("popupButton");
var closeBtn = document.getElementById("closeButton");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
