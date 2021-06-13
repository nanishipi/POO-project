import QuizzController from '../controllers/QuizzController.js'

export default class addQuestionView{
    constructor(){

        this.quizzController = new QuizzController();

        this.addQuizForm = document.getElementById('formAddQuiz');
        this.question = document.getElementById('txtQuestion');
        this.answer1 = document.getElementById('txtAnswer1');
        this.answer2 = document.getElementById('txtAnswer2');
        this.answer3 = document.getElementById('txtAnswer3');
        this.answer4 = document.getElementById('txtAnswer4');
        this.correct_answer = document.getElementById('txtCorrect_Answer');
        this.points = document.getElementById('sltPoints');
        this.level = document.getElementById('sltLevel');
        this.photo = document.getElementById('txtPhoto');

        this.addQuizMessage = document.getElementById('addQuizMessage');

        this.addQuiz();

    }

    addQuiz(){

        this.addQuizForm.addEventListener('submit', event => {
            event.preventDefault();

            try {
                this.quizzController.createQuizz(
                    this.question.value,
                    this.answer1.value,
                    this.answer2.value,
                    this.answer3.value,
                    this.answer4.value,
                    this.correct_answer.value,
                    this.points.value,
                    this.level.value,
                    this.photo.value

                );
                this.displayAddQuizMessage('Quiz added with success!', 'success');

               
                setTimeout(() => {
                    location.href = "quizzesAdmin.html";
                },
                    1000);
            } catch (e) {
                this.displayAddQuizMessage(e, 'danger');
            }
        });
    }

    displayAddQuizMessage(message, type) {
        this.addQuizMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }


    }


