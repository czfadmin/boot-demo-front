import {NgModule} from '@angular/core';
import {NbMenuModule, NbSidebarModule} from "@nebular/theme";
import {ThemeModule} from "../@theme/theme.module";
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {ProfileComponent} from "./profile/profile.component";


@NgModule({
	imports: [
		PagesRoutingModule,
		ThemeModule,
		NbMenuModule,
		NbMenuModule.forRoot(),
		NbSidebarModule.forRoot()
	],

	declarations: [
		DashboardComponent,
		PagesComponent,
		ProfileComponent,
	],
})
export class PagesModule {
}
