import UserController from '../controllers/UserController.js'
import UserModel from '../models/UserModel.js'

export default class RankingView {

    constructor() {
        this.userController = new UserController()
        this.userModel = new UserModel()

       this.userCatalog = document.getElementById('catalog')
        this.renderCatalog(this.userModel.getAll())
    }

   renderCatalog(users = []) {
    let result = ''
    if (users.length != 0) {
        result = `
        <table id="Table" class="info text-center"><tr><th>Nome</th><th>Atividades Completas</th><th>Quizzes Completos</th><th>Nível</th></tr>
        `
    } else {
        result = `<p class="info">Sem utilizadores!</p>`
    }

    for (const user of users) {
        
        result += `                
        <td>${user.username}</td>
        <td>Atividades</td>
        <td>Quizzes</td>
        <td>Nível</td>
        </tr>
        `
    }
    result += `</table>`
    this.userCatalog.innerHTML = result
}
}