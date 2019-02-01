export class User {
    id: number;
    name: string;
    password: string;
    isAdmin: boolean;

    constructor(user?) {
        this.id = user ? user.id : 0;
        this.name = user ? user.name : '';
        this.password = user ? user.password : '';
        this.isAdmin = user ? user.isAdmin : false;

    }
}
