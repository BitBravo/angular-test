import {
	Component,
	OnInit,
	Input,
	EventEmitter,
	Output,
	ViewEncapsulation,
} from '@angular/core';

@Component({
	selector: 'nx-monorepo-demo-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
	@Input() type: 'primary' | 'default' | 'dashed' | 'danger' | 'link' =
		'default';
	@Input() disabled: boolean;
	@Input() block: boolean;
	@Input() ghost: boolean;
	@Input() class: string;
	@Input() loading: boolean;
	@Input() size: 'large' | 'small' | 'default' = 'default';
	@Input() shape: 'circle' | 'round';
	@Output() public clicked = new EventEmitter<void>();

	constructor() {}

	ngOnInit(): void {}

	public onClick() {
		if (!this.disabled) {
			this.clicked.emit();
		}
	}
}
