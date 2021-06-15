import UserView from './views/UserView.js';
import QuizzView from './views/QuizzView.js';
import QuestionView from './views/question.view.js';
import addQuestionView from './views/addQuestionView.js';
import adminQuizzView from './views/adminQuizzView.js';
import adminUserView from './views/adminUserView.js';
import adminView from './views/adminView.js';
import homeView from './views/homeView.js';
import ProfileView from './views/ProfileView.js';
import RankingView from './views/RankingView.js';
import logoutView from './views/logoutView.js';
import gameView from './views/gameView.js';



class App {
    constructor() {
        this.routes = {
            'index': [
                UserView,
                logoutView
            ],
            'quizzes': [
                
                QuizzView,
                logoutView
            ],
            'question':[
                QuestionView,
                logoutView
            ],
            'quizzesAdmin':[
                adminQuizzView,
                logoutView
            ],
            'addQuiz':[
                addQuestionView,
                logoutView
                
            ],
            'usersAdmin':[
                adminUserView,
                logoutView
            ],
            'admin':[
                adminView,
                logoutView
            ],
            'perfil':[
                ProfileView,
                logoutView
            ],
            'homepage':[
                homeView,
                logoutView
            ],
            'ranking':[
                RankingView,
                logoutView
            ],
            'jogo':[
                gameView
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
        const users = [
            {
                id: 1,
                username: 'admin',
                email: 'admin@gmail.com',
                password: 'admin',
                gender: '',
                birthday: '',
                photo: '',
                adress:'',
                type:'admin',
                status:'true',
                points:'',
                quizzesPlayed:'',
            },
            {
                id: 2,
                username: 'jia',
                email: 'jia@gmail.com',
                password: '123',
                gender: 'male',
                birthday: '12-12-2012',
                photo: '',
                adress:'Rua Vasco',
                type:'user',
                status:'true',
                points:25,
                quizzesPlayed:4,
                gamesPlayed:3
            },
            {
                id: 3,
                username: 'joao',
                email: 'joao@gmail.com',
                password: '123',
                gender: 'male',
                birthday: '12-12-2012',
                photo: '',
                adress:'Rua Vasco',
                type:'user',
                status:'true',
                points:35,
                quizzesPlayed:2,
                gamesPlayed:1
            },
            {
                id: 4,
                username: 'ana',
                email: 'ana@gmail.com',
                password: '123',
                gender: 'female',
                birthday: '12-12-2012',
                photo: '',
                adress:'Rua Vasco',
                type:'user',
                status:'true',
                points: 50,
                quizzesPlayed:1,
                gamesPlayed:5
            },
        ]

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

        const images = [
            {
                id: 1,
                src: '../images/hamster.jpg'
            },
            {
                id: 2,
                src: '../images/elephant.jpg'
            },
            {
                id: 3,
                src: '../images/sloth.jpg'
            },
            {
                id: 4,
                src: '../images/koala.jpg'
            },
            {
                id: 5,
                src: '../images/yeti.jpg'
            },
        ]
        if (!localStorage.quizzes) {
            localStorage.setItem('quizzes', JSON.stringify(quizzes));
        }
        if (!localStorage.users) {
            localStorage.setItem('users', JSON.stringify(users));
        }
        if (!localStorage.images) {
            localStorage.setItem('images', JSON.stringify(images));
        }
    }
}




new App();
