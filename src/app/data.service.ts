import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private cart =new BehaviorSubject("[]")
currentCart = this.cart.asObservable()

updateCart(newCart :string){
  this.cart.next(newCart)
}


  constructor() { }
}


interface Product {
  _id:string
  nume: string
  pret: number
  img: string
  descriere: string
}
