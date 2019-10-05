import {Component, OnInit} from '@angular/core';
import {MENU_ITEMS} from "./pages-menu";

@Component({
	selector: 'app-pages',
	template: `
		<app-one-column >
			<nb-menu [items]="menu" ></nb-menu >
			<router-outlet ></router-outlet >
		</app-one-column >
	`,
	styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
	menu = MENU_ITEMS;

	constructor() {
	}

}
