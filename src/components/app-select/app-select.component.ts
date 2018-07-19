import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '../../../node_modules/@angular/core';

@Component({
	selector: 'app-select-component',
	templateUrl: 'app-select.component.html',
	styleUrls: ['app-select.component.scss']
})
export class AppSelectComponent /*implements OnInit */{
	@Input() value: string;

	@Input() options: any[];
	@Output() update: EventEmitter<string> = new EventEmitter<string>();

	// ngOnInit(): void {
	// 	this.value = this.value;
	// }

	onUpdate(): void {
		this.update.emit(this.value);
	}
}
