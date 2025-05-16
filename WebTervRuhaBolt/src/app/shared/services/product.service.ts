import { Injectable } from '@angular/core';
import {Product} from '../models/Product';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../models/User';
import {addDoc, collection, docData, Firestore, getDocs, orderBy, query} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsCollection: AngularFirestoreCollection<Product>;
  private products: Observable<Product[]>;

  constructor(
      private afs: AngularFirestore,
      public firestore: Firestore
  ) {
      this.productsCollection = afs.collection<Product>('Products');
      this.products = this.productsCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Product;
            const id = a.payload.doc.id;
            return { ...data, id };
          });
        })
      )
  }

  getAllProducts():Observable<Product[]> {
    return this.products;
  }

  getProductById(id: string): Observable<Product | undefined> {
    return this.afs
      .collection<Product>('Products')
      .doc(id)
      .valueChanges({ idField: 'id' });
  }

  async createProduct(product: Product) {
    const docRef = await addDoc(collection(this.firestore, 'Products'), {
      name: product.name,
      price: product.price,
    });
    console.log("Document written with ID: ", docRef.id);
  }
  async deleteProductById(productId: String) {
    return await this.afs.doc(`Products/${productId}`).delete();
  }

  updateProduct(product: Product) {
    console.log(product);
    return this.afs
      .collection<Product>('Products')
      .doc(product.id.toString())
      .update({
        id: product.id,
        name: product.name,
        price: product.price,
      });
  }

  async descProduct(){
    return (
      await getDocs(query(collection(this.firestore, 'Products'), orderBy('price', 'desc')))
    ).docs.map((Product) => Product.data() as Product);

  }

  async ascProduct(){
    return (
      await getDocs(query(collection(this.firestore, 'Products'), orderBy('price', 'asc')))
    ).docs.map((Product) => Product.data() as Product);

  }

}
