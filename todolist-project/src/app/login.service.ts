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
export class LoginService {
  constructor(private firestore: Firestore) {}

  async login(list: any[]): Promise<void> {
    const listId = doc(collection(this.firestore, 'savedAccounts')).id;
    // Utilizează setDoc pentru a returna o promisiune
    await setDoc(doc(this.firestore, `savedAccounts/${listId}`), {
      items: list,
    });
  }
}
