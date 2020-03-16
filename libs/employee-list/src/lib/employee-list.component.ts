import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	Input,
} from '@angular/core';
import { Observable } from 'rxjs';

import { EmployeeListEntity } from './+state/employee-list.models';
import { EmployeeListFacade } from './+state/employee-list.facade';
import { EmployeeFacade } from '@nx-monorepo-demo/employee';

@Component({
	selector: 'nx-monorepo-demo-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: ['./employee-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent implements OnInit {
	employeeList$: Observable<EmployeeListEntity[]>;
	editCache: { [key: string]: any } = {};
	listOfData: any[] = [];
	@Input() editable: Boolean = false;

	constructor(
		private facade: EmployeeListFacade,
		private facadeEmployee: EmployeeFacade,
	) {}

	startEdit(id: string): void {
		this.editCache[id].edit = true;
		console.log(this.editCache[id]);
	}

	cancelEdit(id: string): void {
		const index = this.listOfData.findIndex(item => item.id === id);
		this.editCache[id] = {
			data: { ...this.listOfData[index] },
			edit: false,
		};
	}

	deleteItem(id: number): void {
		this.facadeEmployee.delete(id);
	}

	saveEdit(id: string): void {
		const index = this.listOfData.findIndex(item => item.id === id);
		Object.assign(this.listOfData[index], this.editCache[id].data);
		this.editCache[id].edit = false;
	}

	updateEditCache(): void {
		this.listOfData.forEach(item => {
			this.editCache[item.id] = {
				edit: false,
				data: { ...item },
			};
		});
	}

	ngOnInit() {
		this.employeeList$ = this.facade.allEmployeeList$;
		this.facade.allEmployeeList$.subscribe(employeeList => {
			this.listOfData = employeeList;
			this.updateEditCache();
		});
	}
}
