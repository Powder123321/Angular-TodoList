import { Injectable } from '@angular/core';
import { Firestore, setDoc, collection, doc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private firestore: Firestore) {}

  async registerService(
    username: string,
    password: string,
    email: string,
    confirmpassword: string
  ): Promise<void> {
    console.log('Registered with', username, password, email, confirmpassword);

    try {
      const listId = doc(
        collection(this.firestore, 'savedRegisteredAccounts')
      ).id;
      await setDoc(doc(this.firestore, `savedRegisteredAccounts/${listId}`), {
        username,
        password,
        email,
        confirmpassword,
      });

      console.log('Data saved successfully');
    } catch (error) {
      console.error('Error saving data', error);
    }
  }
}
