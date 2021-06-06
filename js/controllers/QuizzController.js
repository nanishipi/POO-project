import QuizzModel from '../models/QuizzModel.js'

export default class QuizzController {
    constructor() {
        this.QuizzModel = new QuizzModel();
    }

    createQuizz(pergunta, opcao1, opcao2, opcao3 , opcao4, resposta, pontos , nivel, imagem) {
        this.QuizzModel.create(pergunta, opcao1, opcao2, opcao3 , opcao4, resposta, pontos , nivel, imagem);
    }

   

    setCurrentQuizz(id) {
        this.QuizzModel.setCurrentQuizz(id)
    }
    getCurrentQuizz() {
        return this.QuizzModel.getCurrentQuizz()
    } 

    getQuizzLevel(level){
        return this.getQuizzLevel(level)
    }

    getQuizzes(){
        return this.QuizzModel.getQuizzes()
    }

    removeQuizz(id) {
        this.QuizzModel.remove(id)
    }



    editQuizz(pergunta, opcao1, opcao2, opcao3 , opcao4, resposta, pontos , nivel, imagem) {
        this.QuizzModel.editQuizz(pergunta, opcao1, opcao2, opcao3 , opcao4, resposta, pontos , nivel, imagem)
        
    }
}