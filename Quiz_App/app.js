const quizData = [
    {
        question: "Hangisi 12 Olimposlu Yunan Tanrısı arasında yer almaz?",
        a: "Athena",
        b: "Ares",
        c: "Thor",
        d: "Hephaistos",
        e: "Apollon",
        correct: "c",
    },
    {
        question: "Amerika Birleşik Devletleri tarihi boyunca en büyük zaiyatı hangi savaşta vermiştir?",
        a: "1. Dünya Savaşı",
        b: "2. Dünya Savaşı",
        c: "Vietnam Savaşı",
        d: "Amerikan İç Savaşı",
        e: "Irak Savaşı",
        correct: "d",
    },
    {
        question: "Fenerbahçe SK armasında bulunan yaprak hangi bitkiye aittir?",
        a: "Yonca",
        b: "Meşe Yaprağı",
        c: "Kayın Yaprağı",
        d: "Akdeniz Defnesi",
        e: "Salkın Söğüt",
        correct: "d",
    },
    {
        question: "Hangisi Türkiye Cumhuriyeti'nin komşu devletlerinden değildir?",
        a: "Bulgaristan",
        b: "Yunanistan",
        c: "İran",
        d: "Gürcistan",
        e: "Türkmenistan",
        correct: "e",
    },
    {
        question: "Yavuz Sultan Selim Halifelik makamını hangi devleti ortadan kaldırdıktan sonra Osmanlı Devleti'ne getirmiştir?",
        a: "Abbası Halifeliği",
        b: "Emevi Halifeliği",
        c: "Fatımi Halifeliği",
        d: "Memlük Halifeliği",
        e: "Safevi Halifeliği",
        correct: "d",
    },
    {
        question: "Sefiller kitabının yazarı kimdir?",
        a: "Victor Hugo",
        b: "Balzac",
        c: "Dostoyevski",
        d: "Franz Kafka",
        e: "Maksim Gorki",
        correct: "a",
    },
    {
        question: "Turgut Özal'dan önceki cumhurbaşkanı hangisidir?",
        a: "Süleyman Demirel",
        b: "Kenan Evren",
        c: "Bülent Ecevit",
        d: "Necmettin Erbakan",
        e: "Celal Bayar",
        correct: "b",
    },
    {
        question: "Ünlü uyuşturucu karteli ve milyoner Pablo Escobar hangi ülkenin vatandaşıydı?",
        a: "Amerika Birleşik Devletleri",
        b: "Bolivya",
        c: "Kolombiya",
        d: "Meksika",
        e: "Küba",
        correct: "c",
    },
    {
        question: "Hangisi tarihte İstanbul için kullanılan isimlerden birisi değildir?",
        a: "Constantinopolis",
        b: "Konstantiniyye",
        c: "Byzantion",
        d: "Hagia Sophia",
        e: "Nova Roma",
        correct: "d",
    },
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const e_text = document.getElementById("e_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]

    deselectedAnswers()

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectedAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()

    // console.log(answer)
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2> Test tamamlandı, ${score * 20} puan aldınız 🥳 </h2>
                <button class="submit" onClick="location.reload()"> Tekrar Dene 🔄️ </button>
            `
        }
    }
})
