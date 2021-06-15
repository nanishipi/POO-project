import UserModel from '../models/UserModel.js'

export default class UserController {
    constructor() {
        this.userModel = new UserModel();
    }

    createUser(username, email, password, gender , birthday, photo, adress ,type,status) {
        if (!this.userModel.getAll().some(user => user.username === username)) {
            this.userModel.create(username, email, password, gender , birthday, photo, adress ,type,status);
        } else {
            throw Error(`Utilizador "${username}" já existe!`);
        }
    }

    loginUser(username, password) {
        if (this.userModel.getAll().some(user => { return user.username === username && user.password === password })) {
            this.userModel.login(username);
            this.userCompare = JSON.parse(localStorage.getItem('users'))
            for (let i = 0; i <= [this.userModel.users.length - 1]; i++) {
                if (this.userCompare[i].username === sessionStorage.getItem('loggedUser')) {
                    sessionStorage.setItem('userName', this.userNameLogged = JSON.parse(localStorage.getItem('users'))[i].username)
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

    addPoints(points) {
        this.userModel.addPoints(points)
        
    }

    addQuizzesPlayed(quizzes) {
        this.userModel.addQuizzesPlayed(quizzes)
        
    }

    addGamesPlayed(games) {
        this.userModel.addGamesPlayed(games)
        
    }

    addAvatar(avatar){
        this.userMode.addAvatar(avatar)
    }
   

    getAllImages(){
        this.userModel.getAllImages()
    }
}
