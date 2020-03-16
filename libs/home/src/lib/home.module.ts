import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { EmployeeListModule } from '@nx-monorepo-demo/employee-list';
import { SharedUiModule } from '@nx-monorepo-demo/shared/ui';

@NgModule({
	imports: [
		CommonModule,
		EmployeeListModule,
		SharedUiModule,
		RouterModule.forChild([
			{
				path: '',
				component: HomeComponent,
			},
		]),
	],
	declarations: [HomeComponent],
	exports: [HomeComponent],
})
export class HomeModule {}
