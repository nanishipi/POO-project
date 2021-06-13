import QuizzController from '../controllers/QuizzController.js'
import QuizzModel from '../models/QuizzModel.js'

export default class QuizzView {

    constructor() {
        this.quizzController = new QuizzController()
        this.quizzModel = new QuizzModel()


       this.add = document.getElementById('add')
       this.quizCatalog = document.getElementById('catalog')
        

        this.addQuiz()
        this.renderCatalog(this.quizzModel.getQuizzes())
    }


   addQuiz(){

    this.add.addEventListener('click', event => {
        event.preventDefault();
    
        location.href="addQuiz.html"

       })


   }

   bindRemoveEvent(){
       
    for (const btnRemove of document.getElementsByClassName('remove')) {
            
        btnRemove.addEventListener('click', event => {
            let decide = confirm('Are you sure you want to delete?');
            if(decide==true){
                this.quizzController.removeQuizz(event.target.id)
                location.href="quizzesAdmin.html"
            }else{
            console.log('ok')
            }

        
            
        })
    }
   }

   renderCatalog(quizzes = []) {
    let result = ''
    if (quizzes.length != 0) {
        result = `
        <table id="Table" class="info text-center"><tr><th>Pergunta</th><th>Nível</th><th>Pontos</th><th>Ações</th></tr>
        `
    } else {
        result = `<p class="info">Without any quizzes!</p>`
    }

    for (const question of quizzes) {
        
        result += `                
        <td>${question.pergunta}</td>
        <td>${question.nivel}</td>
        <td>${question.pontos}</td>
        <td><button id='${question.id}' class='btn btn-danger m-2 remove'>REMOVER</button></td>
        </tr>
        `
    }
    result += `</table>`
    this.quizCatalog.innerHTML = result
    this.bindRemoveEvent()

}
}