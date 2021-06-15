import UserController from '../controllers/UserController.js'
import UserModel from '../models/UserModel.js'

export default class gameView {

    constructor() {
        this.userController = new UserController()
        this.userModel = new UserModel()

        this.cards = document.querySelectorAll('.memory-card');

        this.hasFlippedCard = false;
        this.lockBoard = false;
        this.firstCard
        this.secondCard

        this.card()
        this.shuffle()
        
    }

    card() {
        this.cards.forEach(card => card.addEventListener('click', event => {

            this.flipCard(event)
            this.checkGameOver()

        }));
    }

    flipCard(event) {
        if (this.lockBoard) return;
        console.log("First Card" + this.firstCard)
        if (this.firstCard == undefined) {
            console.log(event.target.className.split(' ')[1])
            this.firstCard = document.querySelector(`#${event.target.className.split(' ')[1]}`);
            this.firstCard.classList.add('flip');
            return
        } else {
            this.secondCard = document.querySelector(`#${event.target.className.split(' ')[1]}`);
            this.secondCard.classList.add('flip');
            this.checkForMatch();
        }


        





        // second click


        
    }

    shuffle() {
        this.cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
        });
    }

    disableCards() {
        this.firstCard.removeEventListener('click', this.flipCard);
        this.secondCard.removeEventListener('click', this.flipCard);

        this.hasFlippedCard = false;
        this.lockBoard = false;
        this.firstCard = undefined
        this.secondCard = undefined;

    }

    unflipCards() {
        this.lockBoard = true;
        setTimeout(()=>{this.lockBoard = true
        
            this.firstCard.classList.remove('flip');
            this.secondCard.classList.remove('flip');
    
            this.hasFlippedCard = false;
            this.lockBoard = false;
            this.firstCard = undefined
            this.secondCard = undefined;},1500)
        
        
    }

    checkForMatch() {
        console.log("entrou")
        console.log(this.firstCard)
        console.log(this.secondCard )

        let isMatch = this.firstCard.id.replace("1", '') == this.secondCard.id.replace("1", '')
        console.log(isMatch)
        isMatch ? this.disableCards() : this.unflipCards();
    }

redirect(){

    location.href="jogo.html"

}

    checkGameOver(){

        this.cards = document.querySelectorAll('.flip');
        let points = 50
        if(this.cards.length == 12)
        {
           
            setTimeout(()=>{

            swal({
                title: "Congratulations!!!",
                text: "You Win " + points + " Points!",
                icon: "success",       
                buttons:
                {
                    confirm: {
                        text: "OK",
                        visible: true,
                        closeModal: false
                    }
                },
            }).then((confirm) => {
                if (confirm) {
                    this.userController.addPoints(points)
                    this.userController.addGamesPlayed(1)
                    setTimeout(() => this.redirect() ,500);
                } 
            })
            },500)
        
        }
    
    }
}