import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-priceplan',
  templateUrl: './priceplan.component.html',
  styleUrls: ['./priceplan.component.css']
})
export class PriceplanComponent implements OnInit {
	items = [
	{
		id: 1,
		name:'bert',
		interval: 'monthly',
		price: 20,
		discount: 10,
	},
	{
		id: 2,
		name:'jelmer',
		interval: 'monthly',
		price: 50,
		discount: 10,
	},
	{
		id: 3,
		name:'robert',
		interval: 'monthly',
		price: 30,
		discount: 10,
	},
	{
		id: 4,
		name:'hinnie',
		interval: 'monthly',
		price: 60,
		discount: 10,
	},
	{
		id: 5,
		name:'evert',
		interval: 'monthly',
		price: 10,
		discount: 10,
	},
	];

  constructor() { }

 	ngOnInit() {
 	}
}
