import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	ViewEncapsulation,
} from '@angular/core';

@Component({
	selector: 'nx-monorepo-demo-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class AlertComponent implements OnInit {
	@Input() banner: boolean;
	@Input() closeable: boolean;
	@Input() showIcon: boolean;
	@Input() closeText: string;
	@Input() description: string;
	@Input() message: string;
	@Input() iconType: string;
	@Input() type: 'success' | 'info' | 'warning' | 'error' = 'warning';

	@Output() public closed = new EventEmitter<void>();

	constructor() {}

	ngOnInit(): void {}

	public onCloseAlert() {
		if (!this.closeable) {
			this.closed.emit();
		}
	}
}
