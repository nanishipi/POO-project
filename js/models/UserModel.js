
export default class UserModel {
    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : [];
        this.images = localStorage.images ? JSON.parse(localStorage.images) : [];
    }

    getAll() {
        return this.users
    }

    getAllImages(){
        return this.images
    }

    create(username, email, password, gender , birthday, photo, adress ,type, status) {
        const user = {
            id: this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1,
            username: username,
            email: email,
            password: password,
            gender: gender,
            birthday: birthday,
            photo: photo,
            adress:adress,
            type:type,
            status:status,
            points:0,
            quizzesPlayed:0,
            gamesPlayed:0
        }
        this.users.push(user);
        this._persist();
    }

    remove(username) {
        this.users = this.users.filter(user => user.username != username)
        this._persist()
    }

    block(username){
        this.users.filter(user => user.username = username)
        localStorage.setItem('userStatus', false)
        this._persist()
    }

    login(username) {
        sessionStorage.setItem('loggedUser', username);
    }

    logout() {
        sessionStorage.removeItem('loggedUser');
        sessionStorage.removeItem("userPhoto");
        sessionStorage.removeItem('level');
        sessionStorage.removeItem("userStatus");
        sessionStorage.removeItem('userName');
        sessionStorage.removeItem("userType");
    }

    isLogged() {
        return sessionStorage.getItem('loggedUser') !== null ? true : false;
    }

    setCurrentUser(id) {
        localStorage.setItem("user", id); 
    } 

    getCurrentUser() {
        return this.users.find(user => user.id === +localStorage.user)
    } 

    _persist() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    editProfile(username, email, password, gender , birthday, photo, adress ,type, status){
        const currentUser = this.getCurrentUser()

        const UserNew = {
            id: currentUser.id,
            username: username,
            email: email,
            password: password,
            gender: gender,
            birthday: birthday,
            photo: photo,
            adress:adress,
            type: type,
            status:status,
            points:currentUser.points,
            quizzesPlayed: currentUser.quizzesPlayed,
            gamesPlayed:currentUser.gamesPlayed
        }
        
        this.users= this.users.map(user=>user.id==currentUser.id?UserNew:user)
        this._persist()
    }

    addPoints(points){
        const user = this.getCurrentUser()
        let newPoints=user.points+points
        const usernew={
            id:user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            gender: user.gender,
            birthday: user.birthday,
            photo: user.photo,
            adress: user.adress,
            type: user.type,
            status: user.status,
            points: newPoints,
            quizzesPlayed: user.quizzesPlayed,
            gamesPlayed:user.gamesPlayed
        }
        this.users= this.users.map(user=> {
            if(user.id==usernew.id){

                user = usernew
            }
        return user
        
        
        })
        this._persist()
    }

    addQuizzesPlayed(quizzes){
        const user = this.getCurrentUser()
        let newQuizzes =user.quizzesPlayed + quizzes
        const usernew={
            id:user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            gender: user.gender,
            birthday: user.birthday,
            photo: user.photo,
            adress: user.adress,
            type: user.type,
            status: user.status,
            points: user.points,
            quizzesPlayed: newQuizzes,
            gamesPlayed:user.gamesPlayed,

        }
        this.users= this.users.map(user=>user.id==usernew.id?usernew:user)
        this._persist()
    }

    addGamesPlayed(games){
        const user = this.getCurrentUser()
        let newGames =user.gamesPlayed + games
        const usernew={
            id:user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            gender: user.gender,
            birthday: user.birthday,
            photo: user.photo,
            adress: user.adress,
            type: user.type,
            status: user.status,
            points: user.points,
            quizzesPlayed: user.quizzesPlayed,
            gamesPlayed: newGames
        }
        this.users= this.users.map(user=>user.id==usernew.id?usernew:user)
        this._persist()
    }

}
