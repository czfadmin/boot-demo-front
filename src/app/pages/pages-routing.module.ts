import { LoginComponent } from './login/login.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {PagesComponent} from './pages.component';
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent
			},
			{
				path: 'profile',
				component: ProfileComponent
			},
			{
				path: 'login',
				component:LoginComponent
			},
			{
				path: '**',
				component: NotFoundComponent,
			},
		]
	},
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
	{
		path: '**',
		component: NotFoundComponent,
	},

];


@NgModule({
	declarations: [
	],
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class PagesRoutingModule {
}
