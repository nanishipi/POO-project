import UserController from '../controllers/UserController.js'
import UserModel from '../models/UserModel.js'

export default class AdminView {
    constructor() {

        this.userController = new UserController()
        this.userModel = new UserModel()

        this.logout = document.getElementById("logout")


 
        this.BindLogout()


    }


   BindLogout() {
        this.logout.addEventListener("click", () => {
           
            this.userController.logoutUser()

        });
    }
    

}