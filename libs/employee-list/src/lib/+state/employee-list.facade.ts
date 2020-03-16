import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromEmployeeList from './employee-list.reducer';
import * as EmployeeListSelectors from './employee-list.selectors';
import * as EmployeeListActions from './employee-list.actions';

@Injectable()
export class EmployeeListFacade {
	loaded$ = this.store.pipe(
		select(EmployeeListSelectors.getEmployeeListLoaded),
	);
	allEmployeeList$ = this.store.pipe(
		select(EmployeeListSelectors.getAllEmployeeList),
	);
	selectedEmployeeList$ = this.store.pipe(
		select(EmployeeListSelectors.getSelected),
	);

	constructor(
		private store: Store<fromEmployeeList.EmployeeListPartialState>,
	) {}

	dispatch(action: Action) {
		this.store.dispatch(action);
	}
	loadAll() {
		this.store.dispatch(EmployeeListActions.loadEmployeeList());
	}
}
