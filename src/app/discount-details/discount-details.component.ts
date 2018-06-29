import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { KpnApiService } from '../kpn-api.service';

@Component({
  selector: 'app-discount-details',
  templateUrl: './discount-details.component.html',
  styleUrls: ['./discount-details.component.css']
})
export class DiscountDetailsComponent implements OnInit {
	discountId;
	data;
	constructor(private activatedRoute: ActivatedRoute, private apiService: KpnApiService) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => this.discountId = params.discountId);
		this.data = this.apiService.getDiscount(this.discountId);

	}

}
