import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ButtonComponent } from './buttons/button.component';
import { CardComponent } from './card/card.component';
import { AlertComponent } from './alert/alert.component';

const COMPONENTS = [ButtonComponent, CardComponent, AlertComponent];

@NgModule({
	imports: [CommonModule, NgZorroAntdModule],
	declarations: [...COMPONENTS],
	exports: [...COMPONENTS, NgZorroAntdModule],
})
export class SharedUiModule {}
