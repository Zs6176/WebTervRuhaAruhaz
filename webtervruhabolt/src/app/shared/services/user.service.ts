import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';
import {addDoc, collection, Firestore, getDocs, limit, query, where, updateDoc, doc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any;


  constructor(private afs: AngularFirestore,public firestore: Firestore) {
  }

  async getUsers(){
    return (
      await getDocs(query(collection(this.firestore, 'User')))
    ).docs.map((User) => User.data() as User);
  }

  async getUserById(id: string){
    return (
      await getDocs(query(collection(this.firestore, 'User'), where('id', '==', id), limit(1)))
    ).docs.map((User) => User.data() as User)
  }

  async create(user: User) {
    const docRef = await addDoc(collection(this.firestore, 'User'), {
      docId: user.docId,
      email: user.email,
      id: user.id,
      isAdmin: user.isAdmin,
      name: user.name,
    } );
    const taskId = docRef.id;
    updateDoc(docRef, {docId: taskId})
    console.log("Document written with ID: ", docRef.id);
  }

  async deleteUserById(userId: String) {
    return await this.afs.doc(`User/${userId}`).delete();
  }

  async updateUser(user: User) {
    const userRef = doc(this.firestore, "User", user.docId);
    updateDoc(userRef, {
      email: user.email,
      id: user.id,
      isAdmin: user.isAdmin,
      name: user.name,})
  }
}
