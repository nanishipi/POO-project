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
        this.avatarLvl = document.getElementById('avatarLvl')

        //Profile Modal
        this.modalUsername = document.getElementById('modalUsername')
        this.modalEmail = document.getElementById('modalEmail')
        this.modalAdress = document.getElementById('modalAdress')
        this.modalGender = document.getElementById('modalGender')
        this.modalBirthDate = document.getElementById('modalBirthDate')
        this.modalPassword = document.getElementById('modalPassword')
        this.mdlEditedMsg = document.getElementById('mdlEditedMsg')

        //Cards Conquistas
        this.card1 = document.getElementById('conquista1')
        this.card2 = document.getElementById('conquista2')
        this.card3 = document.getElementById('conquista3')

        //Buttons DOM
        this.editBtn = document.getElementById('editBtn')
        this.editModalBtn = document.getElementById('editModalBtn')
        this.claimbtn1 = document.getElementById('claimBtn1')
        this.claimbtn2 = document.getElementById('claimBtn2')
        this.claimbtn3 = document.getElementById('claimBtn3')

        this.bindProfilePictureInfo()
        this.bindClaimPoints()
        this.bindEditUserForm()
        this.bindgetUserInfo()
        this.bindClaimPoints()
    }


    bindEditUserForm() {
        this.editModalBtn.addEventListener('click', event => {
            try {
                this.userController.editProfile(this.modalUsername.value, this.modalEmail.value, this.modalPassword.value, this.modalGender.value, this.modalBirthDate.value, this.photo.src, this.modalAdress.value, "user", "true")
                this.displayEditedMessage('Registado com sucesso!', 'success');
            }
            catch {
                this.displayEditedMessage(e, 'danger');
            }
        })
    }

    bindgetUserInfo() {
        let loggeduser = this.userController.userModel.getAll().filter(user => user.username == sessionStorage.getItem('userName'));
        console.log(loggeduser)
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

        if (loggeduser[0].points >= 100) {
            this.claimbtn3.disabled = false;
        }
        else {
            this.claimbtn3.disabled = true;
        }

        if (loggeduser[0].quizzesPlayed >= 10) {
            this.claimbtn2.disabled = false;
        }
        else {
            this.claimbtn2.disabled = true;
        }

        if (loggeduser[0].gamesPlayed >= 2) {
            this.claimbtn1.disabled = false;
        }
        else {
            this.claimbtn1.disabled = true;
        }


    }

    bindClaimPoints() {
        let points = 50

        this.claimbtn3.addEventListener('click', () => {
            this.userController.addPoints(points)
            this.claimbtn3.disabled = true
            swal({
                title: "Congratulations!!!",

                text: "Congratus, you claimed " + points + " points!",
                icon: "success",       
            })
        })
        this.claimbtn2.addEventListener('click', () => {
            this.userController.addPoints(points)
            this.claimbtn2.disabled = true
            swal({
                title: "Congratulations!!!",

                text: "Congratus, you claimed " + points + " points!",
                icon: "success",       
            })
    
        })
        this.claimbtn1.addEventListener('click', () => {
            this.userController.addPoints(points)
            this.claimbtn1.disabled = true
            swal({
                title: "Congratulations!!!",

                text: "Congratus, you claimed " + points + " points!",
                icon: "success",       
            })
        })
    }

    bindProfilePictureInfo() {
        let loggeduser = this.userController.userModel.getAll().filter(user => user.username == sessionStorage.getItem('userName'));
        let result = ''
        if (loggeduser[0].points <= 50) {
            this.photo.src = this.userModel.getAllImages()[0].src
            result = `<h2>Avatar Level 1</h2>
            `
            this.avatarLvl.innerHTML = result
        }
        else if (loggeduser[0].points >= 51 && loggeduser[0].points <= 101) {
            this.photo.src = this.userModel.getAllImages()[1].src
            result = `<h2>Avatar Level 2</h2>
            `
            this.avatarLvl.innerHTML = result
        }
        else if (loggeduser[0].points >= 101 && loggeduser[0].points <= 200) {
            this.photo.src = this.userModel.getAllImages()[2].src
            result = `<h2>Avatar Level 3</h2>
            `
            this.avatarLvl.innerHTML = result
        }
        else if (loggeduser[0].points >= 201 && loggeduser[0].points <= 500) {
            this.photo.src = this.userModel.getAllImages()[3].src
            result = `<h2>Avatar Level 4</h2>
            `
            this.avatarLvl.innerHTML = result
        }
        else if (501 <= loggeduser[0].points) {
            this.photo.src = this.userModel.getAllImages()[4].src
            result = `<h2>Avatar Level 5</h2>
            `
            this.avatarLvl.innerHTML = result
        }
    }

    displayEditedMessage() {
        this.mdlEditedMsg.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }
}