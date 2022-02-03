const quizDB = [
    {
        question: "Q1: In general, are you more", 
        a: "Soft Hearted",
        b: "Strong Willed"
    },
    {
        question: "Q2: You love to work in ", 
        a: "Indoor/Office",
        b: "Site/Outdoor"
    },
    {
        question: "Q3: How you want to attend a meeting", 
        a: "Scheduled/Planned ",
        b: "Spontaneous"
    },
    {
        question: "Q4: How you view life as more ", 
        a: "Black and white ",
        b: "Colorful"
    },
    {
        question: "Q5: You are which type of person", 
        a: "Introvert",
        b: "Extrovert"
    },
    {
        question: "Q6: In a meeting you prefer to ", 
        a: " One of Spokesperson",
        b: "Play valuable role but not a spokesperson "
    },
    {
        question: "Q7: Choose any one", 
        a: "Love to buy things ",
        b: "Love to sell things"
    },
    {
        question: "Q8: At a business function with many strangers, would you most likely", 
        a: " Mingle with few ,mostly familiar members",
        b: "Mingle with many, including newcomer "
    },
    {
        question: "Q9: What defines you more ", 
        a: "Imaginative",
        b: "Down to earth"
    },
    {
        question: "Q10: You are more likely to", 
        a: ".Give the benefit of doubt",
        b: "Seek justice"
    },
    {
        question: "Q11: What is more enjoyable for you? ", 
        a: "Completing project",
        b: "Creating a project"
    },
    {
        question: "Q12: In a idea plan, you are more into ", 
        a: "Vision",
        b: "Facts"
    },
    {
        question: "Q13: You love to", 
        a: "Plan",
        b: "Going with the flow"
    },
    {
        question: "Q14: You focus on ", 
        a: "What is",
        b: "What could be"
    },
    {
        question: "Q15: .When making decisions,you are more like ", 
        a: "There is flexibility in changing the decision",
        b: "No change, final decision"
    },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");


let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
}

loadQuestion();

const getCheckedAnswer = () => {
    
    let answer;

    answers.forEach((currAnsElem) => {
        if(currAnsElem.checked) {
            answer = currAnsElem.id;
        }
    })

    return answer;
}

const deselectAll = () => {

    answers.forEach((currAnsElem) => {
        currAnsElem.checked = false;
    });
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();

    if(checkedAnswer === "ans1") {
        score = score + 2;
    }else if(checkedAnswer === "ans2"){
        score++;
    } 


    questionCount++;

    deselectAll();
     if(questionCount == (quizDB.length)){
        submit.innerHTML = `SUBMIT`;
        const questionDiv = document.getElementById("question-div");
        questionDiv.style.display = "none";
        questionDiv.classList.add('scoreArea');
        showScore.classList.remove('scoreArea');
        console.log(questionDiv);
        if(score < 15) {
            showScore.innerHTML = `
            <h3>Your score is ${score}/${quizDB.length*2}</h3>
            <h3>Please attend all the questions</h3>
            <button class="btn" onclick="location.reload()">Test Again</button>
            `
        }
       else if(score >= 15 && score <= 19) {
            showScore.innerHTML = `
            <h3>Your score is ${score}/${quizDB.length*2}</h3>
            <div>
            <img class="stats" src="./3.png" alt="">
            <img class="stats" src="./stats.png" alt="">
            </div>
            <button class="btn" onclick="location.reload()">Test Again</button>`;
        }
        else if(score >= 20 && score <= 25) {
            showScore.innerHTML = `
            <h3>Your score is ${score}/${quizDB.length*2}</h3>
            <div class="fx">
            <img class="stats" src="./2.png" alt="">
            <img class="stats" src="./stats.png" alt="">
            </div>
            <button class="btn" onclick="location.reload()">Test Again</button>`;
        }
        else{   
            showScore.innerHTML = `
        <h3>Your score is ${score}/${quizDB.length*2}</h3>
        <div class="fx">
        <img class="stats" src="./Graph-1.png" alt="">
        <img class="stats" src="./stats.png" alt="">
        </div>
        <button class="btn" onclick="location.reload()">Test Again</button>`;
        }
        
    }
    else if(questionCount == (quizDB.length)-1){
        submit.innerHTML = `SUBMIT`;
        loadQuestion();
    }
    else if(questionCount < (quizDB.length)) {
        console.log(score);
        loadQuestion();
    } 
});


