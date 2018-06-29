import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-priceplan',
  templateUrl: './priceplan.component.html',
  styleUrls: ['./priceplan.component.css']
})
export class PriceplanComponent implements OnInit {

	data;
 	constructor() {}

 	ngOnInit() {
 		this.data = [
 			{
 				id: 0,
 				price: 10,
 				interval: 'monthly',
 				disc: 0
 			},
 			{
 				id: 1,
 				price: 40,
 				interval: 'yearly',
 				disc: 1
 			},
 		];

 	}

}
