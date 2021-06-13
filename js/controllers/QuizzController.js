import QuizzModel from '../models/QuizzModel.js'

export default class QuizzController {
    constructor() {
        this.QuizzModel = new QuizzModel();
    }

    createQuizz(pergunta, opcao1, opcao2, opcao3, opcao4, resposta, pontos, nivel, imagem) {
        this.QuizzModel.create(pergunta, opcao1, opcao2, opcao3, opcao4, resposta, pontos, nivel, imagem);
    }



    setCurrentQuizz(id) {
        this.QuizzModel.setCurrentQuizz(id)
    }
    getCurrentQuizz() {
        return this.QuizzModel.getCurrentQuizz()
    }



    getQuizzes(level) {

        const quizzes = this.QuizzModel.getQuizzes()
        let filteredQuizzes = []
        for (const question of quizzes) {
            if (question.nivel == level){
                filteredQuizzes.push(question)
            }
            
        }


        return filteredQuizzes

    }

    removeQuizz(id) {
        this.QuizzModel.removeQuizz(id)
    }



    editQuizz(pergunta, opcao1, opcao2, opcao3, opcao4, resposta, pontos, nivel, imagem) {
        this.QuizzModel.editQuizz(pergunta, opcao1, opcao2, opcao3, opcao4, resposta, pontos, nivel, imagem)

    }
}