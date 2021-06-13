import UserController from '../controllers/UserController.js'

export default class adminView {
    constructor() {
        this.userController = new UserController();

        this.usersTable = document.getElementById('usersTable')
        this.deleteUser = document.getElementById('removeBtn')
        this.blockUser = document.getElementById('blockBtn')
        this.editUser = document.getElementById('editBtn')

        this.bindRemoveUser()
        this.bindBlockUser()
        this.bindEditUser()
        this.bindLogout()
    }

    bindLogout() {
        this.logoutBtn.addEventListener("click", event => {
            this.userModel.logOut()
            setTimeout(() => {
                window.location.href = "../index.html"
            },
                1000)
        })
    }

    bindRemoveUser() {
        this.deleteUser.addEventListener("click", event => {
            if (confirm(`Sure to delete : ${this.UserController.getById(sessionStorage.getItem('selectedUser')).username}`)) {
                this.userModel.remove(sessionStorage.getItem('selectedUser'))
                setTimeout(() => {
                    window.location.href = "admin.html";
                },
                    1000)
            }
        })

    }

    bindBlockUser() {
        this.blockUser.addEventListener("click", event => {
            if (confirm(`Sure to block: ${this.userController.getById(sessionStorage.getItem('selectedUser')).username}`)) {
                this.userModel.block(sessionStorage.getItem('selectedUser'))
            }
            setTimeout(() => {
                window.location.href = "admin.html";
            },
                1000)
        })
    }

    bindEditUser() {
        this.editUser.addEventListener("click", event => {
            if (confirm(`Sure to edit: ${this.userController.getById(sessionStorage.getItem('selectedUser')).username}`)) {
                this.userModel.editProfile(sessionStorage.getItem('selectedUser'))
            }
        })
        setTimeout(() => {
            window.location.href = "admin.html";
        },
            1000)
    }
}
