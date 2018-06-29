import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { KpnApiService } from '../kpn-api.service';
import * as jsPDF from 'jsPDF';

@Component({
  selector: 'app-priceplan-details',
  templateUrl: './priceplan-details.component.html',
  styleUrls: ['./priceplan-details.component.css']
})
export class PriceplanDetailsComponent implements OnInit {
	data;
	id;
	constructor(private activatedRoute: ActivatedRoute, private apiService: KpnApiService) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => this.id = params.priceplanId);
		this.data = this.apiService.getPricePlanData(this.id);
		let discount = this.apiService.getDiscount(this.data.discount);
		this.data['discountDetails'] = discount;
	}

	downloadPDF(){
		const doc = new jsPDF();
		doc.text('fsdsnfdsjkfnkdjn',20,10);
		doc.save('invoice.pdf');
	}


}
