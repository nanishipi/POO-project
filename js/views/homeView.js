

export default class AdminView {
    constructor() {
        this.game = document.getElementById("Game")
        this.quizzes = document.getElementById("Quizzes") 
        this.leaderboard = document.getElementById("Leaderboard")

        //mudar de página
        this.GameConfig();
        this.QuizzesConfig();
        this.LeaderboardConfig()


    }

    GameConfig() {
        this.game.addEventListener("click", () => {
            setTimeout(() => {

                location.assign('../html/jogo.html')

            },
                100);

        });
    }
    QuizzesConfig() {
        this.quizzes.addEventListener("click", () => {
            setTimeout(() => {

                location.assign('../html/quizzes.html')

            },
                100);

        });
    }

    LeaderboardConfig() {
        this.leaderboard.addEventListener("click", () => {
            setTimeout(() => {

                location.assign('../html/ranking.html')

            },
                100);

        });
    }

}