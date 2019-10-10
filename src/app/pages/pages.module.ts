import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {NgModule} from '@angular/core';
import {NbButtonModule, NbCardModule, NbMenuModule, NbSidebarModule} from '@nebular/theme';
import {ThemeModule} from "../@theme/theme.module";
import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {ProfileComponent} from "./profile/profile.component";


@NgModule({
	imports: [
		PagesRoutingModule,
		ThemeModule,
		NbMenuModule,
		NbMenuModule.forRoot(),
		NbSidebarModule.forRoot(),
		NbCardModule,
		ReactiveFormsModule,
		NbButtonModule
	],

	declarations: [
		DashboardComponent,
		PagesComponent,
		ProfileComponent,
		LoginComponent,
	],
})
export class PagesModule {
}
