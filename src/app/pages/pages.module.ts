import {NgModule} from '@angular/core';
import {NbMenuModule, NbSidebarModule} from "@nebular/theme";
import {ThemeModule} from "../@theme/theme.module";
import {PagesRoutingModule} from './pages-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesComponent} from './pages.component';
import {NotFoundComponent} from './not-found/not-found.component';


@NgModule({
	imports: [
		PagesRoutingModule,
		ThemeModule,
		NbMenuModule,
		NbMenuModule.forRoot(),
		NbSidebarModule.forRoot()
	],
	exports: [],
	declarations: [
		DashboardComponent,
		PagesComponent,
		NotFoundComponent,
	]
})
export class PagesModule {
}
