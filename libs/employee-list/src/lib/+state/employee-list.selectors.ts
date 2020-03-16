import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
	EMPLOYEELIST_FEATURE_KEY,
	State,
	EmployeeListPartialState,
	employeeListAdapter,
} from './employee-list.reducer';

// Lookup the 'EmployeeList' feature state managed by NgRx
export const getEmployeeListState = createFeatureSelector<
	EmployeeListPartialState,
	State
>(EMPLOYEELIST_FEATURE_KEY);

const { selectAll, selectEntities } = employeeListAdapter.getSelectors();

export const getEmployeeListLoaded = createSelector(
	getEmployeeListState,
	(state: State) => state.loaded,
);

export const getEmployeeListError = createSelector(
	getEmployeeListState,
	(state: State) => state.error,
);

export const getAllEmployeeList = createSelector(
	getEmployeeListState,
	(state: State) => selectAll(state),
);

export const getEmployeeListEntities = createSelector(
	getEmployeeListState,
	(state: State) => selectEntities(state),
);

export const getSelectedId = createSelector(
	getEmployeeListState,
	(state: State) => state.selectedId,
);

export const getSelected = createSelector(
	getEmployeeListEntities,
	getSelectedId,
	(entities, selectedId) => selectedId && entities[selectedId],
);
