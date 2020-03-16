import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromEmployee from './employee.reducer';
import * as EmployeeSelectors from './employee.selectors';
import * as EmployeeActions from './employee.actions';

@Injectable()
export class EmployeeFacade {
	loaded$ = this.store.pipe(select(EmployeeSelectors.getEmployeeLoaded));
	allEmployee$ = this.store.pipe(select(EmployeeSelectors.getAllEmployee));
	selectedEmployee$ = this.store.pipe(select(EmployeeSelectors.getSelected));

	constructor(private store: Store<fromEmployee.EmployeePartialState>) {}

	dispatch(action: Action) {
		this.store.dispatch(action);
	}

	delete(id: number) {
		this.store.dispatch(EmployeeActions.deleteEmployee({ id }));
	}
}
