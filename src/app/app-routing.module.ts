import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {
	NbAuthComponent,
	NbAuthModule,
	NbLoginComponent,
	NbLogoutComponent,
	NbPasswordAuthStrategy,
	NbRegisterComponent,
	NbRequestPasswordComponent,
	NbResetPasswordComponent
} from "@nebular/auth";


const routes: Routes = [
	{
		path: 'pages',
		loadChildren: () => import('./pages/pages.module').then(
			m => m.PagesModule)
	},
	{
		path: 'chat',
		loadChildren: () => import('./chat-room/chat-room.module').then(
			m => m.ChatRoomModule
		)
	}, {
		path: 'admin',
		loadChildren: () => import('./admin/admin.module').then(
			m => m.AdminModule)
	},
	{
		path: 'auth',
		component: NbAuthComponent,
		children: [
			{
				path: '',
				component: NbLoginComponent,
			},
			{
				path: 'login',
				component: NbLoginComponent,
			},
			{
				path: 'register',
				component: NbRegisterComponent,
			},
			{
				path: 'logout',
				component: NbLogoutComponent,
			},
			{
				path: 'request-password',
				component: NbRequestPasswordComponent,
			},
			{
				path: 'reset-password',
				component: NbResetPasswordComponent,
			},
		]
	},

	{
		path: '',
		redirectTo: 'pages',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: 'pages'
	},
];
const config: ExtraOptions = {
	useHash: false,
	enableTracing: true
};

@NgModule({
	imports: [
		HttpClientModule,
		NbAuthModule,
		NbAuthModule.forRoot({
			strategies: [
				NbPasswordAuthStrategy.setup({
					name: "email",
				}),
			],
			forms: {}
		}),
		RouterModule.forRoot(routes, config)

	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
