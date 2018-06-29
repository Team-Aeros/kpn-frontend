import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscription-details',
  templateUrl: './subscription-details.component.html',
  styleUrls: ['./subscription-details.component.css']
})
export class SubscriptionDetailsComponent implements OnInit {
	data;
	id;
  	constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
	
  	ngOnInit() {
		this.activatedRoute.params.subscribe(params => this.id = params.subscriptionId);
  		this.data = {
			id: this.id,
			customer_id: 0,
			priceplan: {
				id: 0,
				name: 'A2338'
			},
			start_date: '29-06-2018',
			end_date: '29-06-2019'
		};
  	}

}
