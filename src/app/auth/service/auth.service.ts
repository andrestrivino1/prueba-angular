import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public aut: AngularFireAuth) {}

  async login(email:string, password:string){

    try{
      const result = await this.aut.signInWithEmailAndPassword(email,password);
      return result;
  }
    catch (error){
      console.log(error);
    }

  }

  async register(email:string, password:string){

    try{
      const result = await this.aut.createUserWithEmailAndPassword(email,password);
      return result;
    }
    catch(error){
      console.log(error);
    }
  }

  async logout(){
    try{
      await this.aut.signOut();
    }
    catch(error){
      console.log(error);
    }
  }
}
