import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "../@core/auth/auth.guard";
import {NotFoundComponent} from "../pages/not-found/not-found.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AdminComponent} from "./admin/admin.component";


const routes: Routes = [
	{
		path: '',
		component:AdminComponent,
		canActivate:[AuthGuard],
		children: [
			{
				path: '',
				canActivateChild:[AuthGuard],
				children:[
					{
						path: 'dashboard',
						component: AdminDashboardComponent
					},

				]
			},

			{
				path: '**',
				component: NotFoundComponent,
			},
		],
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
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule {
}
