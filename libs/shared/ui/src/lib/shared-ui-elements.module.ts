import { Injector, NgModule, Type } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonComponent } from './buttons';
import { ButtonsModule } from './buttons/buttons.module';

const IMPORTS = [ButtonsModule];

@NgModule({
	imports: [BrowserModule, ...IMPORTS],
	entryComponents: [ButtonComponent],
	declarations: [],
	exports: [...IMPORTS],
})
export class SharedUiElementsModule {
	constructor(private injector: Injector) {}

	public ngDoBootstrap() {
		const elements: Array<[Type<any>, string]> = [
			[ButtonComponent, 'nx-monorepo-demo-button'],
		];

		for (const [component, name] of elements) {
			const el = createCustomElement(component, { injector: this.injector });
			customElements.define(name, el);
		}
	}
}
