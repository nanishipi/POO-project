import UserController from '../controllers/UserController.js'
import UserModel from '../models/UserModel.js'

export default class adminUserView {

    constructor() {
        this.userController = new UserController()
        this.userModel = new UserModel()


       
       this.userCatalog = document.getElementById('catalog')
        

       
        this.renderCatalog(this.userModel.getAll())
    }

    bindBlockEvent() {
        for (const btnBlock of document.getElementsByClassName('block')) {
            
            btnBlock.addEventListener('click', event => {
                
                this.userController.setCurrentUser(event.target.id)
                const currentUser = this.userController.getCurrentUser()
                if(currentUser.status=="false"){

                    alert("Já está bloqueado!")
                }else{
                if (confirm("Tem a certeza que quer bloquear?")) {
                this.userController.editProfile(currentUser.username,currentUser.email,currentUser.password,currentUser.gender,currentUser.birthday,currentUser.photo,currentUser.adress,currentUser.type,"false")
                alert("Utilizador Bloqueado Com Sucesso!")
                }
                }
            })
        }
    }

    bindUnlockEvent() {
        for (const btnUnlock of document.getElementsByClassName('unlock')) {
            
            btnUnlock.addEventListener('click', event => {
                
                
                this.userController.setCurrentUser(event.target.id)
                const currentUser = this.userController.getCurrentUser()
                if(currentUser.status=="true"){

                    alert("Já está desbloqueado!")
                }else{
                if (confirm("Tem a certeza que quer desbloquear?")) {
                    this.userController.editProfile(currentUser.username,currentUser.email,currentUser.password,currentUser.gender,currentUser.birthday,currentUser.photo,currentUser.adress,currentUser.type,"true")
                alert("Desbloqueado Com Sucesso!")
                }
            }
            })
        }
    }

   bindRemoveEvent(){
       
    for (const btnRemove of document.getElementsByClassName('remove')) {
            
        btnRemove.addEventListener('click', event => {

            
            let decide = confirm('Are you sure you want to delete?');
            if(decide==true){
                this.userController.removeUser(event.target.id)
                location.href="usersAdmin.html"
            }else{
            console.log('ok')
            }

        
            
        })
    }
   }

   renderCatalog(users = []) {
    let result = ''
    let allUsers = this.userModel.getAll().filter( user => user.type =='user')
    if (users.length != 0) {
        result = `
        <table id="Table" class="info text-center"><tr><th>ID</th><th>Nome</th><th>Email</th><th>Ações</th></tr>
        `
    } else {
        result = `<p class="info">Sem utilizadores!</p>`
    }

    for (const user of allUsers) {
        
        result += `                
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td><button id='${user.id}' class='btn btn-warning m-2 block'>BLOQUEAR</button>
        <button id='${user.id}' class='btn btn-success m-2 unlock' >DESBLOQUEAR</button>
        <button id='${user.username}' class='btn btn-danger m-2 remove'>REMOVER</button></td>
        </tr>
        `
    }
    result += `</table>`
    this.userCatalog.innerHTML = result
    this.bindRemoveEvent()
    this.bindBlockEvent()
    this.bindUnlockEvent()

}
}