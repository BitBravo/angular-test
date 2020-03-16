import { ApiService, API_ENDPOINTS } from '@nx-monorepo-demo/api';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeEntity } from '@nx-monorepo-demo/employee';

@Injectable()
export class EmployeeListService {
	constructor(private apiService: ApiService) {}
	private apiEndPoint = API_ENDPOINTS.demoAppEndPoint;

	query(): Observable<{ data: EmployeeEntity[] }> {
		return this.apiService.get(this.apiEndPoint + '/employees');
	}
}
