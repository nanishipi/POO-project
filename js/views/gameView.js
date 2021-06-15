import UserController from '../controllers/UserController.js'
import UserModel from '../models/UserModel.js'

export default class gameView {

    constructor() {
        this.userController = new UserController()
        this.userModel = new UserModel()

        this.cards = document.querySelectorAll('.memory-card');

        this.hasFlippedCard = false;
        this.lockBoard = false;
        this.firstCard = "";
         this.secondCard = "";

        this.card()
        this.shuffle()
       /*  this.flipCard(); */
    }

    card() {

        this.cards.forEach(card => card.addEventListener('click', this.flipCard));
      
    }

    flipCard() {

      

         if (this.lockBoard) return;
        if (this === this.firstCard) return;


        this.classList.add('flip');

        
        if (!this.hasFlippedCard) {
            // first click

            

            this.hasFlippedCard = true;
            this.firstCard = this;

            return;
        }

        // second click
        this.secondCard = this;
 
    }

    shuffle(){

        this.cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
        });

    }

    disableCards(){

       this.firstCard.removeEventListener('click',this.flipCard);
        this.secondCard.removeEventListener('click', this.flipCard);

        this.hasFlippedCard = false;
        this.lockBoard = false;
        this.firstCard = "";
         this.secondCard = "";

    }

    unflipCards(){

        this.lockBoard=true
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            
            this.hasFlippedCard = false;
            this.lockBoard = false;
            this.firstCard = "";
             this.secondCard = "";
           
          }, 1500);
        }


        checkForMatch(){

            let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

            isMatch ? disableCards() : unflipCards();


        }


    }

   