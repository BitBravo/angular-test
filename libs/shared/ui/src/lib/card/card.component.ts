import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'nx-monorepo-demo-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
	@Input() extra: string;
	@Input() bordered: boolean;
	@Input() title: string;
	constructor() {}

	ngOnInit(): void {}
}
