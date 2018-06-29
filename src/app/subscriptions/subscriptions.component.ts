import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.data = {
  		id: 0,
  		customer_id: 0,
  		priceplan: 0,
  		start_date: '29 june 2018',
  		

  	}
  }

}
