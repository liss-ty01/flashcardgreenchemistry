// You can add JavaScript functionality here if needed
function handleButtonClick(buttonType) {
    if (buttonType === 'back') {
        // Navigate to a new page with back
        window.location.href = 'index.html';}
    }

let selectedEmotion = '';

function selectEmotion(emotion) {
    selectedEmotion = emotion;
    alert(`Anda memilih: ${emotion}`);
}

function submitEmotion() {
    if (selectedEmotion === '') {
        alert('Silakan pilih reaksi Anda terlebih dahulu.');
    } else {
        const responseElement = document.getElementById('response');
        responseElement.textContent = `Semangat Belajarnya! Reaksi pembelajaran kali ini: ${selectedEmotion}`;
        responseElement.classList.remove('hidden');
    }
}
