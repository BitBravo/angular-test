import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as EmployeeListActions from './employee-list.actions';
import { EmployeeListEntity } from './employee-list.models';

export const EMPLOYEELIST_FEATURE_KEY = 'employeeList';

export interface State extends EntityState<EmployeeListEntity> {
	selectedId?: string | number; // which EmployeeList record has been selected
	loaded: boolean; // has the EmployeeList list been loaded
	error?: string | null; // last none error (if any)
}

export interface EmployeeListPartialState {
	readonly [EMPLOYEELIST_FEATURE_KEY]: State;
}

export const employeeListAdapter: EntityAdapter<EmployeeListEntity> = createEntityAdapter<
	EmployeeListEntity
>();

export const initialState: State = employeeListAdapter.getInitialState({
	// set initial required properties
	loaded: false,
});

const employeeListReducer = createReducer(
	initialState,
	on(EmployeeListActions.loadEmployeeList, state => ({
		...state,
		loaded: false,
		error: null,
	})),
	on(EmployeeListActions.loadEmployeeListSuccess, (state, { employeeList }) =>
		employeeListAdapter.addAll(employeeList, { ...state, loaded: true }),
	),
	on(EmployeeListActions.loadEmployeeListFailure, (state, { error }) => ({
		...state,
		error,
	})),
);

export function reducer(state: State | undefined, action: Action) {
	return employeeListReducer(state, action);
}
