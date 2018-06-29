import { Component, OnInit } from '@angular/core';
import { KpnApiService } from '../kpn-api.service';

@Component({
  selector: 'app-priceplan',
  templateUrl: './priceplan.component.html',
  styleUrls: ['./priceplan.component.css']
})
export class PriceplanComponent implements OnInit {

	items;
 	constructor(private apiService: KpnApiService) {}

 	ngOnInit() {
 		this.items = this.apiService.getAllPricePlanData();

 	}
}
