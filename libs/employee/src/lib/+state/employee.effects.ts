import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as EmployeeActions from './employee.actions';

import { EmployeeService } from '../employee.service';

@Injectable()
export class EmployeeEffects {
	loadEmployee$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EmployeeActions.loadEmployee),
			fetch({
				run: action => {
					// Your custom service 'load' logic goes here. For now just return a success action...
					return EmployeeActions.loadEmployeeSuccess({ employee: [] });
				},

				onError: (action, error) => {
					console.error('Error', error);
					return EmployeeActions.loadEmployeeFailure({ error });
				},
			}),
		),
	);

	deleteEmployee = createEffect(() =>
		this.actions$.pipe(
			ofType(EmployeeActions.deleteEmployee),
			fetch({
				run: (action: ReturnType<typeof EmployeeActions.deleteEmployee>) => {
					return this.employeeService
						.delete(action.id)
						.pipe(map(response => EmployeeActions.deleteEmployeeSuccess()));
				},

				onError: (action, error) => {
					console.error('Error', error);
					return EmployeeActions.deleteEmployeeFailure({ error });
				},
			}),
		),
	);

	constructor(
		private actions$: Actions,
		private employeeService: EmployeeService,
	) {}
}
