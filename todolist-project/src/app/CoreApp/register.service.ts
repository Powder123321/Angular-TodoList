import { Injectable } from '@angular/core';
import { Firestore, setDoc, doc, collection } from '@angular/fire/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  constructor(private firestore: Firestore) {}

  async registerService(
    username: string,
    password: string,
    email: string,
    confirmpassword: string
  ): Promise<void> {
    console.log('Register attempt with', username, email);

    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('Registration successful', userCredential.user);

      if (userCredential.user) {
        sendEmailVerification(userCredential.user)
          .then(() => {
            console.log('Email de verificare trimis.');
          })
          .catch((error) => {
            console.error(
              'Eroare la trimiterea emailului de verificare',
              error
            );
          });
      }

      // Opțional: Salvează detalii suplimentare în Firestore
      const listId = doc(collection(this.firestore, 'users')).id;
      await setDoc(doc(this.firestore, `users/${listId}`), {
        username,
        email,
        // Nu salva parola sau confirmarea parolei în Firestore pentru securitate!
      });

      console.log('User details saved successfully');
    } catch (error) {
      console.error('Error during registration', error);
    }
  }
}
