import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { KpnApiService } from '../kpn-api.service';

@Component({
  selector: 'app-subscription-details',
  templateUrl: './subscription-details.component.html',
  styleUrls: ['./subscription-details.component.css']
})
export class SubscriptionDetailsComponent implements OnInit {
	data;
	id;
  	constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: KpnApiService) { }
	
  	ngOnInit() {
  		this.data = [];
		this.activatedRoute.params.subscribe(params => this.id = params.subscriptionId);
		this.apiService.getSubscription(this.id).subscribe(response => this.data = response);
  	}
}
