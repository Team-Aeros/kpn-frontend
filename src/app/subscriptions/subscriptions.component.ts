import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { KpnApiService } from '../kpn-api.service';
import * as jsPDF from 'jsPDF';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

	// data = [

	// 	id: 1,
	// 	customer_id: 2,
	// 	priceplan: '10gb',
	// 	startdate: '29-06-2018',
	// 	enddate: '29-07-2018',
	// },
	// ];
	data;

	constructor(private apiService: KpnApiService) {}

	ngOnInit() {
		this.data = [];
		this.apiService.getAllSubscriptions().subscribe(response => this.data = response);
		console.log(this.data);
	}

	downloadPDF() {
  		console.log("downloading");
  	}

  	addNewSubscription(){
  		var customer_id = <HTMLInputElement>document.getElementById('customer_id');
  		var priceplan = <HTMLInputElement>document.getElementById('priceplan');
  		var startdate = <HTMLInputElement>document.getElementById('startdate');
  		var enddate = <HTMLInputElement>document.getElementById('enddate');
  		var newSub = {
  			id:6,
  			customer_id: parseInt(customer_id.value),
  			priceplan:priceplan.value,
  			startdate:startdate.value,
  			enddate:enddate.value,
  		};
  		this.data.push(newSub);

  	}
}
