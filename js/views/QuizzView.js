import QuizzController from '../controllers/QuizzController.js'

export default class QuizzView {

    constructor() {
        this.quizzController = new QuizzController()

        // Catalog
        /*  this.catalog = document.querySelector("#myCatalog") */
        this.btnPlay1 = document.getElementById('quizzButton1')
        this.btnPlay2 = document.getElementById('quizzButton2')
        this.btnPlay3 = document.getElementById('quizzButton3')


        this.Play()
    }


    Play() {
        this.btnPlay1.addEventListener('click', event => {
            event.preventDefault();
            console.log("fasasg");
            alert("gasg")
            /* sessionStorage.setItem('level',1) */
        })

    }

}

