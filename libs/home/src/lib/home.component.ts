import { Component, OnInit } from '@angular/core';
import { EmployeeListFacade } from '@nx-monorepo-demo/employee-list';

@Component({
	selector: 'nx-monorepo-demo-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	constructor(private facade: EmployeeListFacade) {}

	ngOnInit(): void {
		this.facade.loadAll();
	}

	public buttonClick() {
		alert('A');
	}
}
