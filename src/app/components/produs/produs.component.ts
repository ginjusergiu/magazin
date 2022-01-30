import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-produs',
  templateUrl: './produs.component.html',
  styleUrls: ['./produs.component.css']
})
export class ProdusComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  product: any = {img : ""}
  ngOnInit(): void {
    let prodId = this.route.snapshot.params['id']

    this.api.getProductById(prodId).subscribe((data) => {
      this.product =JSON.parse(data)[0]

      // let parst = JSON.parse(data)
      // this.product = parst[0]
      
    })
  }


}
