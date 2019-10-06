import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NbMenuModule} from "@nebular/theme";
import {ThemeModule} from "../@theme/theme.module";
import {NotFoundComponent} from "../pages/not-found/not-found.component";
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin/admin.component';


@NgModule({
	declarations: [
		AdminDashboardComponent,
		AdminComponent,
	],
	imports: [
		CommonModule,
		AdminRoutingModule,
		ThemeModule,
		NbMenuModule
	],
})
export class AdminModule {
}
