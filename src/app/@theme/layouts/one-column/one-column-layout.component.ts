import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-one-column',
	template: `
		<nb-layout >
			<nb-layout-header fixed >
				<app-boot-header ></app-boot-header >

			</nb-layout-header >
			<nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive >
				<ng-content select="nb-menu" ></ng-content >
			</nb-sidebar >

			<nb-layout-column >
				<ng-content select="router-outlet" ></ng-content >
			</nb-layout-column >
			<nb-layout-footer fixed >
				<app-footer></app-footer>
			</nb-layout-footer >
		</nb-layout >
	`,
	styleUrls: ['./one-column-layout.component.scss']
})
export class OneColumnLayoutComponent implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

}
