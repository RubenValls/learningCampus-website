import { action, makeObservable, observable} from "mobx";

class Student{
    
    username = 'username';

    constructor() {
        makeObservable(this, {
            username: observable,
            setUsername: action,
        });
    }

    setUsername(username){
        this.username = username;
    }

}

export const myStock = new Student();