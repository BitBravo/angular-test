import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEmployee from './+state/employee.reducer';
import { EmployeeEffects } from './+state/employee.effects';
import { EmployeeFacade } from './+state/employee.facade';
import { EmployeeService } from './employee.service';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(
			fromEmployee.EMPLOYEE_FEATURE_KEY,
			fromEmployee.reducer,
		),
		EffectsModule.forFeature([EmployeeEffects]),
	],
	providers: [EmployeeFacade, EmployeeService],
})
export class EmployeeModule {}
