import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

	data;
	constructor() {}

	ngOnInit() {
		this.data = [
			{
				id: 0,
				customer_id: 0,
				priceplan: 0,
				start_date: '29 june 2018',
				end_data: '29 june 2019',
				type: 'TV'
			},

			{
				id: 1,
				customer_id: 1,
				priceplan: 0,
				start_date: '30 june 2018',
				end_data: '30 june 2019',
				type: 'mobiel'
			},
			
		];
	}

}
