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
	            label: "Dashboard",
	            icon: "home",
	            href: "/home"
	        },
	        {
	            label: "Browse",
	            icon: "folder",
	            href: "/home"
	        },
	        {
	            label: "My courses",
	            icon: "save",
	            href: "/home"
	        },
	        {
	            label: "Settings",
	            icon: "wrench",
	            href: "/home"
	        },
	    ];

}
