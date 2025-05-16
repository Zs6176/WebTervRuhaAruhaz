import {User} from './User';

export class Profile{
  user: User | undefined;
  logIn: boolean;
  constructor() {
    this.logIn = true;
    this.user=undefined;
  }

}
