import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import * as fromEmployeeList from './+state/employee-list.reducer';
import { EmployeeListEffects } from './+state/employee-list.effects';
import { EmployeeListFacade } from './+state/employee-list.facade';
import { EmployeeListService } from './employee-list.service';
import { EmployeeListComponent } from './employee-list.component';
import { ApiModule } from '@nx-monorepo-demo/api';
import { SharedUiModule } from '@nx-monorepo-demo/shared/ui';
import { EmployeeModule } from '@nx-monorepo-demo/employee';

@NgModule({
	imports: [
		SharedUiModule,
		ApiModule,
		CommonModule,
		FormsModule,
		StoreModule.forFeature(
			fromEmployeeList.EMPLOYEELIST_FEATURE_KEY,
			fromEmployeeList.reducer,
		),
		EffectsModule.forFeature([EmployeeListEffects]),
		EmployeeModule,
	],
	declarations: [EmployeeListComponent],
	providers: [EmployeeListFacade, EmployeeListService],
	exports: [EmployeeListComponent],
})
export class EmployeeListModule {}
