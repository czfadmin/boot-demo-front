import { Component, OnInit } from '@angular/core';
import {MENU_ITEMS} from "../../pages/pages-menu";

@Component({
  selector: 'app-admin',
  template:`
		<app-one-column>
			<nb-menu [items]="menu" ></nb-menu >
			<router-outlet ></router-outlet >
		</app-one-column>

  `,
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
	menu = MENU_ITEMS;
  constructor() { }

  ngOnInit() {
  }

}
