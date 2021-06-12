import QuizzController from '../controllers/QuizzController.js'

export default class QuestionView {

    constructor() {
        this.quizzController = new QuizzController()

        // Catalog
        /*  this.catalog = document.querySelector("#myCatalog") */
        this.questionName = document.getElementById('txtQuestion')
        this.level = sessionStorage.getItem('level')
        this.renderQuestions(this.quizzController.getQuizzes(this.level))

        console.log(this.quizzController.getQuizzes(this.level));
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
          <input type="radio" name="resposta" id="answer1" value="${question.opcao1}">
          <label for="answer1">${question.opcao1}</label>
          <input type="radio" name="resposta" id="answer2" value="${question.opcao2}">
          <label for="answer2">${question.opcao2}</label>
        
          <input type="radio" name="resposta" id="answer3" value="${question.opcao3}">
          <label for="answer3">${question.opcao3}</label>
          <input type="radio" name="resposta" id="answer4" value="${question.opcao4}">
          <label for="answer4">${question.opcao4}</label>
          </div>
    </div>`
        return html
    }

}