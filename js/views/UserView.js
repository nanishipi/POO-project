import UserController from '../controllers/UserController.js'

export default class UserView {
    constructor() {
        this.userController = new UserController();

        // register DOM
        this.registerForm = document.getElementById('frmRegister');
        this.registerBtn = document.getElementById('btnRegister');
        this.registerUsername = document.getElementById('txtUsernameRegister');
        this.registerPassword = document.getElementById('txtPasswordRegister');
        this.registerPassword2 = document.getElementById('txtPasswordRegister2');
        this.registerGender = document.getElementById('sltGender');
        this.registerBirthday = document.getElementById('birthday');
        this.registerEmail = document.getElementById('txtEmailRegister')
        this.registerMessage = document.getElementById('mdlRegisterMessage');

        this.bindAddRegisterForm();

        // login DOM

        this.loginForm = document.getElementById('frmLogin');
        this.loginUsername = document.getElementById('txtUsername');
        this.loginPassword = document.getElementById('txtPassword');
        this.loginMessage = document.getElementById('mdlLoginMessage');

        this.bindAddLoginForm();

        // buttons DOM
        this.loginButton = document.getElementById('btnLogin');
        this.registerButton = document.getElementById('btnRegister');
        this.logoutButton = document.getElementById('btnLogout');

    }

    bindAddRegisterForm() {
        this.registerForm.addEventListener('submit', event => {
            event.preventDefault();

            try {
                if (this.registerPassword.value !== this.registerPassword2.value) {
                    throw Error('As senhas não são iguais!');
                } else {
                    if (this.registerUsername.value === "" || this.registerPassword.value === "" || this.registerPassword2.value === "") {
                        throw Error('Preencha todos os campos!');
                    } else {


                        this.userController.createUser(this.registerUsername.value, this.registerEmail.value, this.registerPassword.value, this.registerGender.value, this.registerBirthday.value, "", "", "user", "true");

                        this.displayRegisterMessage('Registado com sucesso!', 'success');
                        setTimeout(() => {
                            location.href = "index.html"

                        },
                            1000);
                    }
                }
            } catch (e) {
                this.displayRegisterMessage(e, 'danger');
            }
        });
    }

    bindAddLoginForm() {
        this.loginForm.addEventListener('submit', event => {
            event.preventDefault();

            try {    
                this.userController.loginUser(this.loginUsername.value, this.loginPassword.value);

                let LoadPage;
                if (sessionStorage.getItem("userStatus") === "false") {
                    alert("You are blocked!")
                    LoadPage = "index.html"
                  

                } else {

                    this.displayLoginMessage('User logged in with success!', 'success');
                    if (sessionStorage.getItem("userType") === "user") {
                        LoadPage = "html/homepage.html"
                    } else {
                        LoadPage = "html/admin.html"
                    }
                   
                }

                // Wait 1 second before reloading, so the user can see the login success message    
                setTimeout(() => {
                    location.href = LoadPage
                },
                    1000);


            } catch (e) {
                this.displayLoginMessage(e, 'danger');
            }

        });

    }



    displayRegisterMessage(message, type) {
        this.registerMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }

    displayLoginMessage(message, type) {
        this.loginMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }


}

