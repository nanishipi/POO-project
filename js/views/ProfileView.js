import UserController from '../controllers/UserController.js'
import UserModel from '../models/UserModel.js'

export default class ProfileView {
    constructor() {
        this.userController = new UserController()
        this.userModel = new UserModel()

        //Profile DOM
        this.username = document.getElementById('username')
        this.email = document.getElementById('email')
        this.gender = document.getElementById('gender')
        this.adress = document.getElementById('adress')
        this.birthdate = document.getElementById('birthdate')
        this.password = document.getElementById('password')
        this.photo = document.getElementById('photo')

        //Profile Modal
        this.modalUsername = document.getElementById('modalUsername')
        this.modalEmail = document.getElementById('modalEmail')
        this.modalAdress = document.getElementById('modalAdress')
        this.modalGender = document.getElementById('modalGender')
        this.modalBirthDate = document.getElementById('modalBirthDate')
        this.modalPassword = document.getElementById('modalPassword')
        this.mdlEditedMsg = document.getElementById('mdlEditedMsg')

        //Buttons DOM
        this.editBtn = document.getElementById('editBtn')
        this.editModalBtn = document.getElementById('editModalBtn')

        

        this.bindEditUserForm()
        this.bindgetUserInfo()
    }


    bindEditUserForm() {
        this.editModalBtn.addEventListener('click', event => {
            try {
                this.userController.editProfile(this.modalUsername.value,this.modalEmail.value, this.modalPassword.value, this.modalGender.value, this.modalBirthDate.value, this.photo.src, this.modalAdress.value, "user", "true")
                this.displayEditedMessage('Registado com sucesso!', 'success');
            }
            catch {
                this.displayEditedMessage(e, 'danger');
            }    
        })
    }

    bindgetUserInfo() {
        let loggeduser = this.userController.userModel.getAll().filter(user => user.username == sessionStorage.getItem('userName'));
        this.username.value += loggeduser[0].username
        this.email.value += loggeduser[0].email
        this.gender.value += loggeduser[0].gender
        this.adress.value += loggeduser[0].adress
        this.birthdate.value += loggeduser[0].birthday
        this.password.value += loggeduser[0].password
        this.photo.value += loggeduser[0].photo


        this.modalUsername.value += loggeduser[0].username
        this.modalEmail.value += loggeduser[0].email
        this.modalGender.value += loggeduser[0].gender
        this.modalAdress.value += loggeduser[0].adress
        this.modalBirthDate.value += loggeduser[0].birthday
        this.modalPassword.value += loggeduser[0].password
    }

    getAvatarByPoints(){



    }

    displayEditedMessage(){
        this.mdlEditedMsg.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }
}