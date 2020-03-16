import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '@nx-monorepo-demo/shared/ui';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarUserMenuComponent } from './header/user-menu/user-menu.component';

const COMPONENTS = [HeaderComponent, FooterComponent, TopbarUserMenuComponent];

@NgModule({
	imports: [SharedUiModule, CommonModule, FormsModule, ReactiveFormsModule],
	declarations: [...COMPONENTS],
	exports: [...COMPONENTS],
})
export class LayoutComponentsModule {}
