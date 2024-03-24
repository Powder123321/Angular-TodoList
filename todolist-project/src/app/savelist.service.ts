import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  doc,
  setDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private firestore: Firestore) {}

  async saveList(list: any[]): Promise<void> {
    const listId = doc(collection(this.firestore, 'savedLists')).id;
    // Utilizează setDoc pentru a returna o promisiune
    await setDoc(doc(this.firestore, `savedLists/${listId}`), { items: list });
  }

  async deleteList(list: any[]): Promise<void> {
    const listId = doc(collection(this.firestore, 'deleteList')).id;
    await setDoc(doc(this.firestore, `deleteList/${listId}`), { items: list });
  }
}
