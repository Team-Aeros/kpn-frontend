import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-priceplan-details',
  templateUrl: './priceplan-details.component.html',
  styleUrls: ['./priceplan-details.component.css']
})
export class PriceplanDetailsComponent implements OnInit {
	data;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.data = {
			id: this.activatedRoute.params.value.priceplanId,
		}
	}

}
