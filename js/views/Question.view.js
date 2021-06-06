import QuizzController from '../controllers/QuizzController.js'

export default class QuestionView {

    constructor() {
        this.quizzController = new QuizzController()

        // Catalog
        /*  this.catalog = document.querySelector("#myCatalog") */
        this.questionName= document.getElementById('txtQuestion')
        this.level = sessionStorage.getItem('level')
        this.renderQuestions(this.quizzController.getQuizzes(this.level))

        
    }


    renderQuestions(quizzes = []){


    let result = ''
    for(const question of quizzes){
        result += this._generateQuestions(question)
    }
     this.questionName.innerHTML = result
    }


    _generateQuestions(question){
        let html = `
        <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
            <img id="flagGuessCountry" src="${question.imagem}">
        </div>
       
    </div>`
        return html
    }

}