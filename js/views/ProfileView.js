import UserController from '../controllers/UserController.js'

export default class ProfileView {
    constructor() {
        this.userController = new UserController();

        //Profile DOM
        this.username = document.getElementById('username')
        this.email = document.getElementById('email')
        this.gender = document.getElementById('gender')
        this.adress = document.getElementById('adress')
        this.birthdate = document.getElementById('birthdate')
        this.password = document.getElementById('password')

        //Buttons DOM
        this.editBtn = document.getElementById('editBtn')

        this.bindEditUserForm()
        this.bindgetUserInfo() 
    }

    bindEditUserForm() {
        let loggeduser = this.userController.userModel.getAll().filter(user => user.username == sessionStorage.getItem('loggedUser'))[0]
        this.editBtn.addEventListener('click', event => {
            console.log(loggeduser)
            this.usernameModal.value = loggeduser.username
            this.emailModal.value = loggeduser.email
            this.birthModal.value = loggeduser.birthDate
            this.locationModal.value = loggeduser.location
            this.genreModal.value = loggeduser.genre
            this.passwordModal.value = loggeduser.password
            this.passwordConfirmModal.value = loggeduser.password
            this.editProfileModal.addEventListener('click', event => {
                try {
                    if (this.weightModal.value > 0 && this.heightModal.value > 0) {
                        if (this.passwordModal.value == this.passwordConfirmModal.value) {
                            if (this.emailModal.value != "" && this.usernameModal.value != "" && this.passwordModal.value != "" && this.passwordConfirmModal.value != "" && this.locationModal.value != "" && this.weightModal.value != "" && this.birthModal.value != "" && this.aboutYouModal.value != "" && this.heightModal.value != "" && this.imgProfileModal.value != "") {
                                if (confirm("Are you Sure to edit?")) {
                                    let id = this.userController.userModel.getAll().filter(user => user.email == sessionStorage.getItem('loggedUser'))[0].id
                                    this.userController.editUser(this.emailModal.value, this.usernameModal.value, this.passwordConfirmModal.value, this.locationModal.value, this.genreModal.value, this.weightModal.value, this.birthModal.value, this.aboutYouModal.value, this.heightModal.value, this.imgProfileModal.value, "user", id)
                                    this.displayEditMessage("User Edited with success", 'success')
                                    setTimeout(() => {
                                        window.location.href = "profile.html";
                                    },
                                        1000)
                                }
                            } else {
                                throw Error("There are empty fields")
                            }
                        } else {
                            throw Error("Password and Confirm Password are not equal")
                        }
                    } else {
                        throw Error("Just positive numbers")
                    }
                }
                catch (e) {
                    this.displayEditMessage(e, "danger")
                }
            })
        })
    }

    bindgetUserInfo() {
        let loggeduser = this.userController.userModel.getAll().filter(user => user.email == sessionStorage.getItem('loggedUser'))[0]
        console.log(loggeduser);

        this.username.innerHTML += loggeduser.username
        this.email.innerHTML += loggeduser.email
        this.gender.innerHTML += loggeduser.gender
        this.adress.innerHTML += loggeduser.adress
        this.birthdate.innerHTML += loggeduser.birthday

        let users = this.userController.userModel.getAll().filter(user => user.type == "user").sort(function (a, b) { return parseInt(b.points) - parseInt(a.points) })
        if (users.length>=3) {
            this.third.innerHTML=users[2].username
            this.imgThird.scr=users[2].photo
            this.second.innerHTML=users[1].username
            this.imgSecond.src=users[1].photo
            this.first.innerHTML=users[0].username
            this.imgFirst.src=users[0].photo    
        }
    }
}