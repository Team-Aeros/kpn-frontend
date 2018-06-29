import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  data = [
  {
      id: 1,
      name: "Laptop met 5G",
  },
  ];

  ngOnInit() {
  }

  addNewProduct(){
      var product_name = <HTMLInputElement>document.getElementById('product_name');
      var newSub = {
          id:6,
          name: product_name.value,
      };
      this.data.push(newSub);

  }

}
