import { Component } from '@angular/core';

@Component({
	selector: 'nx-monorepo-demo-topbar-user-menu',
	templateUrl: './user-menu.component.html',
	styleUrls: ['./user-menu.component.scss'],
})
export class TopbarUserMenuComponent {
	badgeCount = 7;

	constructor() {}

	badgeCountIncrease() {
		this.badgeCount = this.badgeCount + 1;
	}
}
