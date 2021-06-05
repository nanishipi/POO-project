import QuizzModel from '../models/QuizzModel'

export default class QuizzController {
    constructor() {
        this.QuizzModel = new QuizzModel();
    }

    createQuizz(pergunta, opcao1, opcao2, opcao3 , opcao4, resposta, pontos , dificuldade, imagem) {
        this.QuizzModel.create(pergunta, opcao1, opcao2, opcao3 , opcao4, resposta, pontos , dificuldade, imagem);
    }

    loginUser(username, password) {
        if (this.userModel.getAll().some(user => { return user.username === username && user.password === password })) {
            this.userModel.login(username);
            this.userCompare = JSON.parse(localStorage.getItem('users'))
            for (let i = 0; i <= [this.userModel.users.length - 1]; i++) {
                if (this.userCompare[i].username === sessionStorage.getItem('loggedUser')) {
                    sessionStorage.setItem('userPhoto', this.userPhotoLink = JSON.parse(localStorage.getItem('users'))[i].photo);
                    sessionStorage.setItem('userType', this.userType = JSON.parse(localStorage.getItem('users'))[i].type)
                    sessionStorage.setItem('userStatus', this.userStatus = JSON.parse(localStorage.getItem('users'))[i].status)
                    localStorage.setItem('user',this.user=JSON.parse(localStorage.getItem('users'))[i].id)
                }
            }
            return true;
        } else {
            throw Error('Login inválido!');
        }    
    }

    setCurrentUser(id) {
        this.userModel.setCurrentUser(id)
    }
    getCurrentUser() {
        return this.userModel.getCurrentUser()
    } 

    logoutUser() {
        this.userModel.logout();
    }

    checkLoginStatus() {
        return this.userModel.isLogged();
    }

    removeUser(username) {
        this.userModel.remove(username)
    }

    blockUser(username) {
        this.userModel.block(username)
    }

    editProfile(username, email, password, gender , birthday, photo, adress ,type,status) {
        this.userModel.editProfile(username, email, password, gender , birthday, photo, adress ,type,status)
        
    }
}