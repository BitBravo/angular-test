import { createAction, props } from '@ngrx/store';
import { EmployeeEntity } from './employee.models';

export const loadEmployee = createAction('[Employee] Load Employee');

export const loadEmployeeSuccess = createAction(
	'[Employee] Load Employee Success',
	props<{ employee: EmployeeEntity[] }>(),
);

export const loadEmployeeFailure = createAction(
	'[Employee] Load Employee Failure',
	props<{ error: any }>(),
);

export const deleteEmployee = createAction(
	'[Employee] Delete Employee',
	props<{ id: number }>(),
);
export const deleteEmployeeSuccess = createAction(
	'[Employee] Delete Employee Success',
);
export const deleteEmployeeFailure = createAction(
	'[Employee] Delete Employee Failure',
	props<{ error: Error }>(),
);
