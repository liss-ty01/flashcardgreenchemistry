document.addEventListener("DOMContentLoaded", function() {
    // Function to show the popup
    function showPopup() {
        document.getElementById("automatic-popup").style.display = "block";
    }

    // Function to close the popup
    function closePopup() {
        document.getElementById("automatic-popup").style.display = "none";
    }

    // Event listener to close the popup when close button is clicked
    document.getElementById("closePopup").addEventListener("click", closePopup);

    // Show the popup when the document is fully loaded
    showPopup();
});


function handleButtonClick(buttonType) {
    if (buttonType === 'flashcard') {
        // Navigate to a new page with flashcard
        window.location.href = 'flashcard.html';
    } else if (buttonType === 'task') {
        // Navigate to a new page with task
        window.location.href = 'tasks.html';
    }
}

function GameButton(){
        window.location.href = 'game.html';
}

let popup = document.getElementById("popup");
  
    function openPopup(){
      popup.classList.add("open-popup");
    }
    function closePopup(){
      popup.classList.remove("open-popup");
    }

function togglePopup() {
    var popup = document.getElementById("popup1");
    var overlay = document.getElementById("overlay");
        if (popup.style.display === "block") {
            popup.style.display = "none";
            overlay.style.display = "none";
        } else {
            popup.style.display = "block";
            overlay.style.display = "block";
        }
}