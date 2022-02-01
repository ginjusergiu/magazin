import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-produs',
  templateUrl: './produs.component.html',
  styleUrls: ['./produs.component.css']
})
export class ProdusComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, 
    private dataservice:DataService) { }
  
    cart:string =""

    public subscription : Subscription = new Subscription();

  product: any = {img : ""}
  ngOnInit(): void {
    let prodId = this.route.snapshot.params['id']

    this.subscription =this.dataservice.currentCart.subscribe(cart => this.cart = cart)

    this.api.getProductById(prodId).subscribe((data) => {
      this.product =JSON.parse(data)[0]

      // let parst = JSON.parse(data)
      // this.product = parst[0]
      
    })
  }
  addToCart(product:Product){
    let parse =JSON.parse(this.cart)
    let arr =[...parse, product]
    this.dataservice.updateCart(JSON.stringify(arr))
  }


}
interface Product {
  _id:string
  nume: string
  pret: number
  img: string
  descriere: string
}
