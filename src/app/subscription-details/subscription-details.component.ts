import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscription-details',
  templateUrl: './subscription-details.component.html',
  styleUrls: ['./subscription-details.component.css']
})
export class SubscriptionDetailsComponent implements OnInit {
	data;
  	constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
	
  	ngOnInit() {
  		this.data = {
				id: 0,
				customer_id: 0,
				priceplan: {
					id: 0,
					name: 'happy hour'
				},
				start_date: '29 june 2018',
				end_date: '29 june 2019'
			};
		console.log(this.activatedRoute);
  }

}
