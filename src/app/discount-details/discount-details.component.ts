import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount-details',
  templateUrl: './discount-details.component.html',
  styleUrls: ['./discount-details.component.css']
})
export class DiscountDetailsComponent implements OnInit {

	data;
	constructor() { }

	ngOnInit() {
		this.data = {
			id: 0,
			amountType: 'percentage',
			amount: 5,
			type: {
				id: 0,
				name: 'happy hour'
			}
		}
	}

}
