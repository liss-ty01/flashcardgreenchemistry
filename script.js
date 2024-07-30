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

const questions = [
    { question: 'Katalis hijau dalam Green Chemistry', answer: 'Katalis yang tidak berbahaya' },
    { question: 'Konsep utama dalam Green Chemistry', answer: 'Mengurangi dampak negatif pada lingkungan' },
    { question: 'Jumlah prinsip Green Chemistry', answer: '12' },
    { question: 'Metode berkelanjutan', answer: 'Proses yang digunakan untuk mengurangi jumlah limbah dalam produksi kimia' },
    { question: 'Meningkatkan efisiensi energi dalam proses produksi dan reaksi kimia untuk mengurangi konsumsi sumber daya.', answer: 'Efisiensi energi' },
    { question: 'Mengembangkan produk yang memenuhi kebutuhan manusia yang meminimalkan dampak negatif terhadap lingkungan, misalnya, produk ramah air atau produk biodegradable.', answer: 'Desain produk yang inovatif' },
    { question: 'Tokoh pencetus Green Chemistry', answer: 'Paul Anastas dan John Warner' },
    { question: '"Renewable feedstocks" dalam konteks kimia', answer: 'Bahan baku yang dapat diperbaharui dalam jangka waktu yang singkat.' },
    { question: 'Bio-based polymer dalam konteks Green Chemistry', answer: 'Polimer yang berasal dari sumber hayati seperti tanaman' },
    { question: 'Tujuan penggunaan pelarut yang ramah lingkungan dalam Green Chemistry', answer: 'Mengurangi polusi air' },
    { question: 'Prinsip Green Chemistry yang pertama', answer: 'Pencegahan limbah' },
    { question: 'Plastik yang terbuat dari pati', answer: 'Bioplastik' },
    { question: 'Biokatalis yang bekerja pada kondisi suhu dan tekanan yang lebih rendah, mengurangi kebutuhan energi dan menghasilkan lebih sedikit limbah dibandingkan katalis konvensional.', answer: 'Enzim' },
    { question: 'Cat yang dibuat dengan menggantikan pelarut organik yang volatil dan beracun dengan air, dan mengurangi emisi senyawa organik volatil (VOC) yang berkontribusi pada polusi udara dan masalah kesehatan.', answer: 'Cat berbasis air (water-based paint)' },
    { question: 'Program Green Chemistry di EPA dimulai pada tahun', answer: '1991' }
];

let mistakes = 0;
const maxMistakes = 3;

const questionsElement = document.getElementById('questions');
const answersElement = document.getElementById('answers');
const mistakesElement = document.getElementById('mistakes');
const celebrationElement = document.getElementById('celebration');
const nextPageButton = document.getElementById('next-page-button');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayFlashcards() {
    questionsElement.innerHTML = '';
    answersElement.innerHTML = '';

    shuffleArray(questions);

    questions.forEach((q, index) => {
        const questionCard = document.createElement('div');
        questionCard.textContent = q.question;
        questionCard.classList.add('flashcard');
        questionCard.draggable = true;
        questionCard.dataset.index = index;
        questionCard.addEventListener('dragstart', dragStart);
        questionsElement.appendChild(questionCard);
    });

    const answers = questions.map(q => q.answer);
    shuffleArray(answers);

    answers.forEach((answer, index) => {
        const answerCard = document.createElement('div');
        answerCard.textContent = answer;
        answerCard.classList.add('flashcard');
        answerCard.dataset.index = questions.findIndex(q => q.answer === answer);
        answerCard.addEventListener('dragover', dragOver);
        answerCard.addEventListener('drop', drop);
        answersElement.appendChild(answerCard);
    });
}

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.dataset.index);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const questionIndex = event.dataTransfer.getData('text');
    const answerIndex = event.target.dataset.index;

    if (questionIndex === answerIndex) {
        document.querySelector(`.flashcard[data-index='${questionIndex}']`).classList.add('correct');
        event.target.classList.add('correct');
        setTimeout(() => {
            document.querySelector(`.flashcard[data-index='${questionIndex}']`).classList.add('hidden');
            event.target.classList.add('hidden');
            checkCompletion();
        }, 500);
    } else {
        mistakes++;
        mistakesElement.textContent = `Kesalahan: ${mistakes}`;
        if (mistakes >= maxMistakes) {
            alert('Anda telah melebihi jumlah kesalahan maksimal. Permainan selesai!');
            resetGame();
        }
    }
}

function checkCompletion() {
    const remainingFlashcards = document.querySelectorAll('.flashcard:not(.hidden)');
    if (remainingFlashcards.length === 0) {
        celebrationElement.classList.remove('hidden');
        nextPageButton.classList.remove('hidden');
        launchConfetti();
    }
}

function resetGame() {
    mistakes = 0;
    mistakesElement.textContent = 'Kesalahan: 0';
    celebrationElement.classList.add('hidden');
    nextPageButton.classList.add('hidden');
    displayFlashcards();
}

function goToNextPage() {
    window.location.href = 'crossword.html';
}

function launchConfetti() {
    confetti({
        particleCount: 200,
        spread: 60
    });
}

displayFlashcards();
