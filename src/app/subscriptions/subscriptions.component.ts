import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

	data = [
	{
		id: 1,
		customer_id: 2,
		priceplan: '10gb',
		startdate: '29-06-2018',
		enddate: '29-07-2018',
	},
	{
		id: 2,
		customer_id: 1,
		priceplan: 'happyhour',
		startdate: '29-06-2018',
		enddate: '29-07-2018',
	},
	{
		id: 3,
		customer_id: 3,
		priceplan: '2gb',
		startdate: '29-06-2018',
		enddate: '29-07-2018',
	},
	{
		id: 4,
		customer_id: 3,
		priceplan: '3gb',
		startdate: '29-06-2018',
		enddate: '29-07-2018',
	},
	{
		id: 5,
		customer_id: 1,
		priceplan: 'happyhour',
		startdate: '29-06-2018',
		enddate: '29-07-2018',
	},
	];

	constructor() {}

	ngOnInit() {
		
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
