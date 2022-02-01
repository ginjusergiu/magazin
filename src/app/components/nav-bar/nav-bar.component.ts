import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private dataservice:DataService) { }
  cart:string =""

  public subscription : Subscription = new Subscription();

nrOfItems : number = 0;

  ngOnInit(): void {
    this.subscription =this.dataservice.currentCart.subscribe(cart => this.cart = cart)
  }

  parse() {
    return  JSON.parse(this.cart).length
  }

}
