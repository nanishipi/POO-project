import UserController from '../controllers/UserController.js'
import UserModel from '../models/UserModel.js'

export default class RankingView {

    constructor() {
        this.userController = new UserController()
        this.userModel = new UserModel()

       this.userCatalog = document.getElementById('catalog')
        this.renderCatalog()
    }

   renderCatalog() {


        let allUsers = this.userModel.getAll().filter( user => user.type =='user')

       let sortedUsers = allUsers.sort((a,b) => (a.points > b.points) ? -1 : ((b.points > a.points) ? 1 : 0))
      
    let result = ''
    if (sortedUsers.length != 0) {
        result = `
        <table id="Table" class="info text-center"><tr><th>Name</th><th>Games Played</th><th>Quizzes Played</th><th>Points</th></tr>
        `
    } else {
        result = `<p class="info">Without Users!</p>`
    }

    for (const user of sortedUsers) {
        
        result += `                
        <td>${user.username}</td>
        <td>${user.gamesPlayed}</td>
        <td>${user.quizzesPlayed}</td>
        <td>${user.points}</td>
        </tr>
        `
    }
    result += `</table>`   
    this.userCatalog.innerHTML = result
}
}