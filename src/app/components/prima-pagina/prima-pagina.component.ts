import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-prima-pagina',
  templateUrl: './prima-pagina.component.html',
  styleUrls: ['./prima-pagina.component.css']
})
export class PrimaPaginaComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData()
  }
  
  products:Product[]=[]
  // products = [{ "_id": "61f47011cf638800092bcda7", "nume": "Tricou", "pret": 20, "descriere": "aaa", "imagine": "bbb", "promo": true }, { "_id": "61f4e52bbf1853904adef027", "nume": "Tricou", "pret": 20, "descriere": "aaa", "imagine": "bbb", "promo": true }, { "_id": "61f510c39bb32a9517f0a3fa", "nume": "Produs adaugat la curs", "pret": 2000, "descriere": "aaa", "imagine": "bbb", "promo": true }, { "_id": "61f517079bb32a9517f0a3fb", "nume": "Produs adaugat la curs", "pret": 2000, "descriere": "aaa", "imagine": "bbb", "promo": true }, { "_id": "61f522899bb32a9517f0a3fc", "nume": "asd", "pret": 0, "descriere": "asd", "imagine": null, "promo": null }, { "_id": "61f5228c9bb32a9517f0a3fd", "nume": "sa", "pret": 0, "descriere": "", "imagine": null, "promo": null }, { "_id": "61f523d89bb32a9517f0a3fe", "nume": "mere", "pret": 2, "descriere": "gustoase", "imagine": null, "promo": null }, { "_id": "61f523db9bb32a9517f0a3ff", "nume": "mere", "pret": 2, "descriere": "", "imagine": null, "promo": null }, { "_id": "61f523e79bb32a9517f0a400", "nume": "asas", "pret": 12, "descriere": "", "imagine": null, "promo": null }]

  getData(){
    this.api.getProduct().subscribe((products)=>{
      this.products = JSON.parse(products)
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