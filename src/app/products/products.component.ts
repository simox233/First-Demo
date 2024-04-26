import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products : any;
  public keyword :String="";
  constructor() {
  }
  ngOnInit() {
    this.products= [
      {"id": 1, "name":"Computer", "price":4500},
      {"id": 2, "name":"Portable", "price":5000},
      {"id": 3, "name":"Ecran", "price":3000},
      {"id": 4, "name":"Casque", "price":4560}

    ];
  }

  deleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index,1);

  }

  search() {
    console.log(this.keyword);
    let result=[];
    for (let p of this.products){
      if (p.name.includes(this.keyword)){
        result.push(p);
      }
    }
    this.products= result;

  }
}
