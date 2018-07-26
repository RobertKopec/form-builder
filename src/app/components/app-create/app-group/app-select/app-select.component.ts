import {Component, EventEmitter, Input, Output} from 'node_modules/@angular/core';

@Component({
	selector: 'app-select-component',
	templateUrl: 'app-select.component.html',
	styleUrls: ['app-select.component.scss']
})

export class AppSelectComponent {
	@Input() value: string;
	@Input() options: object;
	@Output() update: EventEmitter<string> = new EventEmitter<string>();

	onUpdate(): void {
		this.update.emit(this.value);
	}
}
