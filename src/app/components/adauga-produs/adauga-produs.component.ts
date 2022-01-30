import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adauga-produs',
  templateUrl: './adauga-produs.component.html',
  styleUrls: ['./adauga-produs.component.css']
})
export class AdaugaProdusComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  produs: Product = {
    _id:"",
    nume: "",
    pret: 0,
    img: "",
    descriere: ""
  }
  log() {
    console.log(this.produs)
  }

  creazaProdus() {
    this.api.createProduct({ produs: this.produs }).subscribe(() => {
      this.router.navigate(["lista-produse"])
    })
    
  }
}

interface Product {
  _id:string
  nume: string
  pret: number
  img: string
  descriere: string
}

