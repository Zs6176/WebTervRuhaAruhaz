export class User {
  docId!: string;
  id!:string;
  email!: string;
  isAdmin!: boolean;
  name!: string;

  constructor(email:string,isAdmin:boolean,name:string) {
    this.email=email;
    this.isAdmin=isAdmin;
    this.name=name;
  }
}
