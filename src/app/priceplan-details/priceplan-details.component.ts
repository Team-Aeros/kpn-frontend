import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-priceplan-details',
  templateUrl: './priceplan-details.component.html',
  styleUrls: ['./priceplan-details.component.css']
})
export class PriceplanDetailsComponent implements OnInit {
	data;
	id;
	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => this.id = params.priceplanId);
		this.data = {
			id: this.id,
			name: '10 Gb',
			price: 10,
			interval: 'monthly',
			discount: {
				id: 0,
				amount: 5,
			}
		}
	}

}
