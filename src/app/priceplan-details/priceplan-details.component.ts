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
	price;
	constructor(private activatedRoute: ActivatedRoute, private apiService: KpnApiService) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => this.id = params.priceplanId);
		this.data = this.apiService.getPricePlanData(this.id);
		let discount = this.apiService.getDiscount(this.data.discount);
		this.data['discountDetails'] = discount;
	}

	downloadPDF(){
		this.apiService.getPricePlan(this.id).subscribe(response => {
			const doc = new jsPDF('p', 'pt', 'a4');
			doc.text("CustomerId: 		8010010858", 50, 100);
			doc.text("Name: 			Leeuwerke", 50,120);
			doc.text("Price: 			 " + response['price'], 50,140);
			doc.text("Datum: 			" + response['created_at'], 50, 160);
			doc.text("5G for tablet",50,200);
			doc.save('invoice.pdf');
		});
		
	}


}
