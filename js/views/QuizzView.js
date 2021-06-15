import QuizzController from '../controllers/QuizzController.js'

export default class QuizzView {

    constructor() {
        this.quizzController = new QuizzController()

        // Catalog
        /*  this.catalog = document.querySelector("#myCatalog") */
        this.btnQuizz1 = document.getElementById('1')
        this.btnQuizz2 = document.getElementById('2')
        this.btnQuizz3 = document.getElementById('3')


        this.Play()
    }


    Play() {
        this.btnQuizz1.addEventListener('click', event => {
            event.preventDefault();
            
            sessionStorage.setItem('level',1)
            setTimeout(() => {
                location.href = "question.html"

            })
        })

        this.btnQuizz2.addEventListener('click', event => {
            event.preventDefault();
            
            sessionStorage.setItem('level',2)
            setTimeout(() => {
                location.href = "question.html"

            });
        })

        this.btnQuizz3.addEventListener('click', event => {
            event.preventDefault();
            
            sessionStorage.setItem('level',3)
            setTimeout(() => {
                location.href = "question.html"

            });
        })
    }

}

