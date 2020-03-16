import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { EmployeeListService } from '../employee-list.service';
import * as EmployeeListActions from './employee-list.actions';

@Injectable()
export class EmployeeListEffects {
	loadEmployeeList$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EmployeeListActions.loadEmployeeList),
			fetch({
				run: action => {
					return this.employeeListService.query().pipe(
						map(response =>
							EmployeeListActions.loadEmployeeListSuccess({
								employeeList: response.data,
							}),
						),
					);
				},

				onError: (action, error) => {
					console.error('Error', error);
					return EmployeeListActions.loadEmployeeListFailure({ error });
				},
			}),
		),
	);

	constructor(
		private actions$: Actions,
		private employeeListService: EmployeeListService,
	) {}
}
