const questions = [
    {
        question: 'Pendekatan untuk mengurangi dampak lingkungan kimia adalah',
        options: ['Green chemistry', 'Green land', 'Green screen', 'Green flag'],
        answer: 'Green chemistry'
    },
    {
        question: 'Program Green Chemistry di EPA dimulai pada tahun...',
        options: ['1990', '1991', '1992', '1993'],
        answer: '1991'
    },
    {
        question: 'Sebuah perusahaan kosmetik ingin memperkenalkan produk-produk baru yang ramah lingkungan. Mereka mulai menggunakan bahan baku organik dan mengurangi penggunaan bahan kimia sintetis dalam formulasi produk. Bagaimana langkah-langkah ini mendukung prinsip-prinsip Green Chemistry?',
        options: ['Meningkatkan penggunaan bahan beracun dalam kosmetik.', 'Memperburuk kualitas produk akhir.', 'Mengurangi dampak negatif pada lingkungan dan kesehatan konsumen.', 'Meningkatkan emisi gas rumah kaca.'],
        answer: 'Mengurangi dampak negatif pada lingkungan dan kesehatan konsumen.'
    },
    {
        question: 'Jumlah prinsip Green Chemistry adalah...',
        options: ['9', '10', '11', '12'],
        answer: '12'
    },
    {
        question: 'Bagaimana cara memperkirakan dampak lingkungan dari suatu proses kimia?',
        options: ['Dengan melakukan analisis siklus hidup', 'Dengan meningkatkan konsumsi air', 'Dengan menganalisis efisiensi energi', 'Dengan meningkatkan penggunaan bahan kimia beracun'],
        answer: 'Dengan melakukan analisis siklus hidup'
    },
    {
        question: 'Katalis hijau dalam Green Chemistry adalah...',
        options: ['Katalis yang berwarna hijau', 'Katalis yang tidak berbahaya', 'Katalis yang digunakan dalam pewarna hijau', 'Katalis yang hanya digunakan pada tumbuhan hijau'],
        answer: 'Katalis yang tidak berbahaya'
    },
    {
        question: 'Di sebuah pabrik kimia, manajemen baru saja memutuskan untuk menerapkan prinsip-prinsip Green Chemistry dalam proses produksi mereka. Mereka ingin mengurangi dampak lingkungan dari limbah yang dihasilkan dan memperkenalkan bahan baku yang lebih ramah lingkungan. Apa langkah pertama yang diambil oleh manajemen dalam menerapkan prinsip Green Chemistry?',
        options: ['Menggunakan lebih banyak bahan beracun untuk meningkatkan efisiensi.', 'Meningkatkan penggunaan bahan plastik dalam kemasan produk.', 'Memperkenalkan limbah berbahaya ke lingkungan sekitar.', 'Meninjau ulang proses produksi dan mengidentifikasi bahan kimia yang dapat diganti.'],
        answer: 'Meninjau ulang proses produksi dan mengidentifikasi bahan kimia yang dapat diganti.'
    },
    {
        question: 'Berikut merupakan contoh produk yang menerapkan prinsip green chemistry, kecuali...',
        options: ['Plastik polimer', 'Biofuel', 'Bioplastik', 'Katalis enzimatik'],
        answer: 'Plastik polimer'
    },
    {
        question: 'Proses apa yang digunakan untuk mengurangi jumlah limbah dalam produksi kimia?',
        options: ['Metode konvensional', 'Metode sintesis', 'Metode analisis', 'Metode berkelanjutan'],
        answer: 'Metode berkelanjutan'
    },
    {
        question: 'Tokoh pencetus green chemistry adalah...',
        options: ['Isaac Newton dan John Werner', 'Paul Anastas dan John Warner', 'Sir William Ramsey dan John Dalton', 'Michael Faraday dan Paul Anastas'],
        answer: 'Paul Anastas dan John Warner'
    }
];

let currentQuestionIndex = 0;
let mistakes = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const mistakesElement = document.getElementById('mistakes');
const reflectionButton = document.getElementById('reflection-button');

function displayQuestion() {

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.textContent = option;
        optionElement.classList.add('option');
        optionElement.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(optionElement);
    });
}

function selectOption(option) {
    const currentQuestion = questions[currentQuestionIndex];
    if (option === currentQuestion.answer) {
        alert('Jawaban Benar!');
        nextQuestion();
    } 
    else {
        mistakes++;
        mistakesElement.textContent = `Kesalahan: ${mistakes}`;
        if (mistakes >= 3) {
            alert('Anda telah melebihi jumlah kesalahan maksimal. Permainan selesai!');
            resetGame();
        } else {
            alert('Jawaban Salah! Coba lagi.');
        }
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        alert('Anda telah menyelesaikan semua pertanyaan. Permainan selesai!');
        showReflectionButton();
        launchConfetti();
    } else {
        displayQuestion();
    }
}

function showReflectionButton() {
    reflectionButton.classList.remove('hidden');
}

function goToReflection() {
    window.location.href = 'reflection.html';
}

function resetGame() {
    currentQuestionIndex = 0;
    mistakes = 0;
    mistakesElement.textContent = 'Kesalahan: 0';
    displayQuestion();
}

function launchConfetti() {
    confetti({
        particleCount: 200,
        spread: 60
    });
}

displayQuestion();
