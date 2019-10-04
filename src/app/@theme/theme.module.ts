import {CommonModule} from "@angular/common";
import {ModuleWithProviders, NgModule} from '@angular/core';
import {
	CORPORATE_THEME,
	COSMIC_THEME,
	DARK_THEME,
	DEFAULT_THEME,
	NbActionsModule,
	NbContextMenuModule,
	NbIconModule,
	NbLayoutModule,
	NbSearchModule,
	NbSelectModule,
	NbSidebarModule,
	NbThemeModule,
	NbUserModule
} from '@nebular/theme';
import {HeaderComponent} from './components';
import {OneColumnLayoutComponent} from './layouts/one-column/one-column-layout.component';

const COMPONENT = [];

@NgModule({
	imports: [
		CommonModule,
		NbLayoutModule,
		NbActionsModule,
		NbSearchModule,
		NbUserModule,
		NbContextMenuModule,
		NbSelectModule,
		NbIconModule,
		NbSidebarModule,
		CommonModule
	],
	exports: [
		CommonModule,
		OneColumnLayoutComponent
	],
	declarations: [
		OneColumnLayoutComponent,
		HeaderComponent
	],
})
export class ThemeModule {
	static forRoot(): ModuleWithProviders {
		return <ModuleWithProviders>{
			ngModule: ThemeModule,
			providers: [
				...NbThemeModule.forRoot(
					{name: 'default'},
					[DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME],
				).providers,
			]
		};
	}
}
