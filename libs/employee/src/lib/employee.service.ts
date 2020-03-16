import { ApiService, API_ENDPOINTS } from '@nx-monorepo-demo/api';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
	constructor(private apiService: ApiService) {}
	private apiEndPoint = API_ENDPOINTS.demoAppEndPoint;

	delete(id: number): Observable<void> {
		return this.apiService.delete<void>(this.apiEndPoint + '/delete/' + id);
	}
}
