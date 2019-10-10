import {
	NgModule,
	ErrorHandler,
	
	InjectionToken,
	Inject,
	Injectable
} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {NbLayoutModule, NbWindowModule} from '@nebular/theme';
import {ReactiveFormsModule} from '@angular/forms';

import {ThemeModule} from './@theme/theme.module';
import {AdminModule} from './admin/admin.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChatRoomModule} from './chat-room/chat-room.module';
import {PagesModule} from './pages/pages.module';

import * as Rollbar from 'rollbar';

const rollbarConfig = {
	accessToken: 'f82df42b23e04d90adb6514519157e02',
	captureUncaught: true,
	captureUnhandledRejections: true
};

export const RollbarService = new InjectionToken<Rollbar>('rollbar');

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
	constructor(@Inject(RollbarService) private rollbar: Rollbar) {
	}
	
	handleError(err: any): void {
		this.rollbar.error(err.originalError || err);
	}
}

export function rollbarFactory() {
	return new Rollbar(rollbarConfig);
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		
		AppRoutingModule,
		
		AdminModule,
		PagesModule,
		ChatRoomModule,
		
		ThemeModule.forRoot(),
		
		NbLayoutModule,
		NbEvaIconsModule,
		NbWindowModule.forRoot()
	],
	providers: [
		{provide: ErrorHandler, useClass: RollbarErrorHandler},
		{provide: RollbarService, useFactory: rollbarFactory}
	],
	bootstrap: [AppComponent],
	entryComponents: []
})
export class AppModule {
}
