

export default class AdminView {
    constructor() {
        this.users = document.getElementById("seeUsers")
        this.quizzes = document.getElementById("seeQuizzes")
      
        
       

        //mudar de página
        this.UsersConfig();
        this.QuizzesConfig();
     

         //counters
         this.Users()
         this.Quizzes()

    }

    Users(){
        let qttUsers=JSON.parse(localStorage.getItem('users'))
        document.getElementById('allUsers').innerHTML= qttUsers.length
        
    }

    Quizzes(){
        let qttQuizzes=JSON.parse(localStorage.getItem('quizzes'))
        document.getElementById('allQuizzes').innerHTML= qttQuizzes.length
        
    }

    UsersConfig() {
        this.users.addEventListener("click", () => {
            setTimeout(() => {

                location.assign('../html/usersAdmin.html')

            },
                100);

        });
    }
    QuizzesConfig() {
        this.quizzes.addEventListener("click", () => {
            setTimeout(() => {

                location.assign('../html/quizzesAdmin.html')

            },
                100);

        });
    }



}