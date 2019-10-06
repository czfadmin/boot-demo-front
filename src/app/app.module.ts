import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {NbLayoutModule, NbWindowModule} from '@nebular/theme';
import {ThemeModule} from './@theme/theme.module';
import {AdminModule} from "./admin/admin.module";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChatRoomModule} from "./chat-room/chat-room.module";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {PagesModule} from "./pages/pages.module";

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

		AppRoutingModule,


		AdminModule,
		PagesModule,
		ChatRoomModule,

		ThemeModule.forRoot(),

		NbLayoutModule,
		NbEvaIconsModule,
		NbWindowModule.forRoot(),

	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents:[],

})
export class AppModule {
}
