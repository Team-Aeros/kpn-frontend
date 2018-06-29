import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

	items = [
	        {
	            label: "Home",
	            icon: "home",
	            href: "/home"
	        },
            {
                label: "Products",
                icon: "home",
                href: "/products"
            },
	        {
	            label: "Subscriptions",
	            icon: "folder",
	            href: "/subscriptions"
	        },
	        {
	            label: "Price Plan",
	            icon: "save",
	            href: "/priceplan"
	        },
	    ];

}
