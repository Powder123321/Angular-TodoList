import { Injectable } from '@angular/core';
import { Firestore, setDoc, collection, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private firestore: Firestore) {}

  async login(username: string, password: string): Promise<void> {
    console.log('Logging in with', username, password);

    try {
      const listId = doc(collection(this.firestore, 'savedAccounts')).id;
      await setDoc(doc(this.firestore, `savedAccounts/${listId}`), {
        username,
        password,
      });
      console.log('Data saved successfully');
    } catch (error) {
      console.error('Error saving data', error);
    }
  }
}
