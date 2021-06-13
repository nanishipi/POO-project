export default class QuizzModel {
    constructor() {
        this.quizzes = localStorage.quizzes ? JSON.parse(localStorage.quizzes) : [];
    }

    getQuizzes() {
        return this.quizzes
    }

    create(pergunta, opcao1, opcao2, opcao3 , opcao4, resposta, pontos , nivel, imagem) {
        const quizz = {
            id: this.quizzes.length > 0 ? this.quizzes[this.quizzes.length - 1].id + 1 : 1,
            pergunta: pergunta,
            opcao1: opcao1,
            opcao2: opcao2,
            opcao3: opcao3,
            opcao4: opcao4,
            resposta: resposta,
            pontos:pontos,
            nivel:nivel,
            imagem:imagem,
        }
        this.quizzes.push(quizz);
        this._persist();
    }

    setCurrentQuizz(id) {
        localStorage.setItem("quizz", id); 
    } 


    getCurrentQuizz() {
        return this.quizzes.find(quizz => quizz.id === +localStorage.quizz)
    } 
    removeQuizz(id) {
        this.quizzes = this.quizzes.filter(quizz => quizz.id != id)
        this._persist()
    }

    _persist() {
        localStorage.setItem('quizzes', JSON.stringify(this.quizzes));
    }

    editQuizz(pergunta, opcao1, opcao2, opcao3 , opcao4, resposta, pontos , nivel, imagem){
        const currentQuizz = this.getCurrentQuizz()
        const newQuizz = {
            id: currentQuizz.id,
            pergunta: pergunta,
            opcao1: opcao1,
            opcao2: opcao2,
            opcao3: opcao3,
            opcao4: opcao4,
            resposta: resposta,
            pontos:pontos,
            nivel:nivel,
            imagem:imagem,
           
        }
        
        this.quizzes= this.quizzes.map(quizz=>quizz.id==currentQuizz.id?newQuizz:quizz)
        this._persist()
    }
}