import { createAction, props } from '@ngrx/store';
import { EmployeeListEntity } from './employee-list.models';

export const loadEmployeeList = createAction(
	'[EmployeeList] Load EmployeeList',
);

export const loadEmployeeListSuccess = createAction(
	'[EmployeeList] Load EmployeeList Success',
	props<{ employeeList: EmployeeListEntity[] }>(),
);

export const loadEmployeeListFailure = createAction(
	'[EmployeeList] Load EmployeeList Failure',
	props<{ error: any }>(),
);
