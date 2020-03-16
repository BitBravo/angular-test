import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NxModule } from '@nrwl/angular';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd';

import { environment } from '../environments/environment';
import { appRouterModule } from './app.routes';
import { AppComponent } from './app.component';
import { LayoutComponentsModule } from './layout/layout.module';

/**
 * Locale Registration
 */
import { registerLocaleData } from '@angular/common';
import { default as localeEn } from '@angular/common/locales/en';
import { NZ_I18N, en_US as localeZorro } from 'ng-zorro-antd';
const LOCALE_PROVIDERS = [
	{ provide: LOCALE_ID, useValue: 'en' },
	{ provide: NZ_I18N, useValue: localeZorro },
];
registerLocaleData(localeEn, 'en');

/**
 * AntDesign Icons
 */
const antDesignIcons = AllIcons as {
	[key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
	key => antDesignIcons[key],
);

@NgModule({
	declarations: [AppComponent],
	imports: [
		HttpClientModule,
		BrowserAnimationsModule,
		BrowserModule,
		LayoutComponentsModule,
		NxModule.forRoot(),
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		StoreRouterConnectingModule.forRoot(),
		/**
		 * Routing Module
		 */
		appRouterModule,

		/**
		 * Layout Components
		 */
		LayoutComponentsModule,
	],
	providers: [...LOCALE_PROVIDERS, { provide: NZ_ICONS, useValue: icons }],
	bootstrap: [AppComponent],
})
export class AppModule {}
