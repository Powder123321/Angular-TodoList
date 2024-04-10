import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser = this.currentUserSubject.asObservable();

  constructor(private router: Router) {}

  async loginService(email: string, password: string): Promise<void> {
    console.log('Logging in with', email, password);

    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log('Login successful', userCredential.user);
    this.currentUserSubject.next(userCredential.user);
  }

  public logoutService(): void {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.currentUserSubject.next(null);
        console.log('Logout successful');
        this.router.navigate(['/login']); // Sau orice altă pagină
      })
      .catch((error) => {
        console.error('Logout failed', error);
      });
  }
}
