import UserView from './views/UserView.js';
import QuizzView from './views/QuizzView.js';
import QuestionView from './views/question.view.js';
import addQuestionView from './views/addQuestionView.js';
import adminQuizzView from './views/adminQuizzView.js';
import adminUserView from './views/adminUserView.js';
import adminView from './views/adminView.js';

import ProfileView from './views/ProfileView.js';


class App {
    constructor() {
        this.routes = {
            'index': [
                UserView,
            ],
            'quizzes': [
                
                QuizzView
            ],
            'question':[
                QuestionView
            ],
            'quizzesAdmin':[
                adminQuizzView
            ],
            'addQuiz':[
                addQuestionView
                
            ],
            'usersAdmin':[
                adminUserView
            ],
            'admin':[
                adminView
            ],
            'perfil':[
                ProfileView,
                UserView
            ]
        };

        // import dummy data for testing purposes
        this._importDataFixtures();

        // instantiate the views mapped in the routes object
        this._instantiateViews();
    }

    _instantiateViews() {
        const path = window.location.pathname
        const file = path.substr(path.lastIndexOf('/') + 1);
        const route = file.split('.')[0];

        const views = this._getViews(route);

        for (const view of views) {
            new view();
        }
    }
    _getViews(route) {
        return typeof this.routes[route] === 'undefined' ? [] : this.routes[route];
    }
    _importDataFixtures() {
        const users = []

        const quizzes= [
            
        {
            id: 1,
            pergunta: "O que é Covid?",
            opcao1: "Virus",
            opcao2: "Comida",
            opcao3: "Brinquedo",
            opcao4: "Pessoa",
            resposta: "Virus",
            pontos: 5 ,
            nivel:1,
            imagem:"https://images.vexels.com/media/users/3/193297/isolated/preview/4752adfc1ac1732ee4ebb62297016c15-iacute-cone-de-desenho-animado-da-covid-19-by-vexels.png",
            

        },
        {
            id: 2,
            pergunta: "O que usar para prevenir o Covid?",
            opcao1: "Casaco",
            opcao2: "Máscara",
            opcao3: "Chapéu",
            opcao4: "Óculos",
            resposta: "Máscara",
            pontos: 10,
            nivel:2,
            imagem:"https://images.vexels.com/media/users/3/193295/isolated/preview/70b06d5888de4fa09d2e3bed5c992311-iacute-cone-de-desenho-animado-da-covid-19-by-vexels.png",
            

        },
        {
            id: 3,
            pergunta: "O Cóvid é Transmissivel?",
            opcao1: "Não",
            opcao2: "Sim",
            opcao3: "Só em crianças",
            opcao4: "Só em adultos",
            resposta: "Sim",
            pontos: 15,
            nivel:3,
            imagem:"https://png.pngtree.com/png-vector/20200404/ourlarge/pngtree-corona-virus-covid-19-cartoon-illustration-png-image_2174359.jpg",
            

        },
        {
            id: 4,
            pergunta: "O que é um virus?",
            opcao1: "Doença",
            opcao2: "Sentimento",
            opcao3: "Jogo",
            opcao4: "Desporto",
            resposta: "Doença",
            pontos: 10 ,
            nivel:2,
            imagem:"https://images.vexels.com/media/users/3/193297/isolated/preview/4752adfc1ac1732ee4ebb62297016c15-iacute-cone-de-desenho-animado-da-covid-19-by-vexels.png",
            

        },
        {
            id: 5,
            pergunta: "Qual é a melhor marca?",
            opcao1: "Samsung",
            opcao2: "Sony",
            opcao3: "Apple",
            opcao4: "Huawei",
            resposta: "Apple",
            pontos: 15 ,
            nivel:3,
            imagem:"https://images.vexels.com/media/users/3/193297/isolated/preview/4752adfc1ac1732ee4ebb62297016c15-iacute-cone-de-desenho-animado-da-covid-19-by-vexels.png",
            

        },
        {
            id: 6,
            pergunta: "De que cor é a banana?",
            opcao1: "Amarelo",
            opcao2: "Vermelho",
            opcao3: "Azul",
            opcao4: "Verde",
            resposta: "Amarelo",
            pontos: 5 ,
            nivel:1,
            imagem:"https://images.vexels.com/media/users/3/193297/isolated/preview/4752adfc1ac1732ee4ebb62297016c15-iacute-cone-de-desenho-animado-da-covid-19-by-vexels.png",
            

        },

            
        
        ]
        if (!localStorage.quizzes) {
            localStorage.setItem('quizzes', JSON.stringify(quizzes));
        }
        if (!localStorage.users) {
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
}




new App();
