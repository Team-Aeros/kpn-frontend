import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount-type-details',
  templateUrl: './discount-type-details.component.html',
  styleUrls: ['./discount-type-details.component.css']
})
export class DiscountTypeDetailsComponent implements OnInit {

	data;
	constructor() { }

	ngOnInit() {
		this.data = {
			id: 0,
			name: 'large data discount',
			limit: 10,
			discount: 10,
			type: 'Volume'
		}
	}

}
