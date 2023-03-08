import { action, computed, makeObservable, observable} from "mobx";

class User{
    
    username = 'username';

    constructor() {
        makeObservable(this, {
            username: observable,
            setUsername: action,
            getUsername: computed
        });
    }

    setUsername(username){
        this.username = username;
    }

    get getUsername(){
        return this.username;
    }

}

export const USERNAME = new User();