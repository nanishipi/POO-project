import QuizzController from '../controllers/QuizzController.js'

export default class QuestionView {

    constructor() {
        this.quizzController = new QuizzController()

        // Catalog
        /*  this.catalog = document.querySelector("#myCatalog") */
        this.questionName = document.getElementById('txtQuestion')
        this.level = sessionStorage.getItem('level')
        this.renderQuestions(this.quizzController.getQuizzes(this.level))
        this.submitBtn = document.getElementById('submit')
        console.log(this.quizzController.getQuizzes(this.level));

        this.checkSubmition()
    }


    renderQuestions(quizzes) {


        let result = ''
        for (const question of quizzes) {
            result += this._generateQuestions(question)
        }
        this.questionName.innerHTML = result
    }


    _generateQuestions(question) {
        let html = `
        <div class="card" id="question">
        <div class="row">

        <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
            <img id="cardImg" src="${question.imagem}">
        </div>
        <div class="col-lg-8 card-title"> 
          <h2>${question.pergunta}</h2>
          </div>
          <input type="radio" name="${question.id}" id="${question.opcao1}" value="${question.opcao1}">
          <label for="${question.opcao1}">${question.opcao1}</label>
          <input type="radio" name="${question.id}" id="${question.opcao2}" value="${question.opcao2}">
          <label for="${question.opcao2}">${question.opcao2}</label>
        
          <input type="radio" name="${question.id}" id="${question.opcao3}" value="${question.opcao3}">
          <label for="${question.opcao3}">${question.opcao3}</label>
          <input type="radio" name="${question.id}" id="${question.opcao4}" value="${question.opcao4}">
          <label for="${question.opcao4}">${question.opcao4}</label>
          </div>
    </div>`
        return html
    }


    checkSubmition() {

        this.submitBtn.addEventListener('click', event => {
            event.preventDefault();

            let correct_questions = 0;
            let filteredQuizzes = this.quizzController.getQuizzes(this.level);
            /* for (let i = 0; i <= filteredQuizzes.length; i++) { */

                for (const question of filteredQuizzes) {
                    /* alert(question.pergunta) */
                    const answer = document.querySelector(`input[name="${question.id}"]:checked`)
                    if (answer.value == question.resposta) {
                        correct_questions++
                    }
                   
                }


          /*   } */
            console.log(correct_questions * 5);


        })

    }
}