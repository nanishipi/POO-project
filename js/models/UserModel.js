
export default class UserModel {
    constructor() {
        this.users = localStorage.users ? JSON.parse(localStorage.users) : [];
    }

    getAll() {
        return this.users
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
            type:type,
            status:status,
            points:currentUser.points,
        }
        
        this.users= this.users.map(user=>user.id==currentUser.id?UserNew:user)
        this._persist()
    }

    addPoints(points){
        const user = this.getCurrentUser()
        let newPoints=user.points+points
        const usernew={
            id:user.id,
            email:user.email,
            username:user.username,
            password:user.password,
            location:user.location,
            genre: user.genre,
            weight: user.weight,
            birthDate: user.birthDate,
            aboutUser: user.aboutUser,
            height: user.height,
            photo: user.photo,
            type: user.type,
            points:newPoints

        }
        this.users= this.users.map(user=>user.id==usernew.id?usernew:user)
        this._persist()
    }

}
