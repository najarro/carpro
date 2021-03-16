import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class CochesService {

  constructor(private firestore: AngularFirestore) { }

  //Firestore CRUD actions example
  createCoche(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("coches")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  updateCoche(data) {
    return this.firestore
      .collection("coches")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getCoches() {
    return this.firestore.collection("coches").snapshotChanges();
  }

  deleteCoche(data) {
    return this.firestore
      .collection("coches")
      .doc(data.payload.doc.id)
      .delete();
  }
}
