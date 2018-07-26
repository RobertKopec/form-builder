import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-preview-input',
	templateUrl: './app-preview-input.component.html',
	styleUrls: ['./app-preview-input.component.scss']
})
export class AppPreviewInputComponent {
	value: string;
	@Input() type: string;
	@Input() class: string;
	@Input() name: string;
	@Output() changed: EventEmitter<string> = new EventEmitter<string>();

	onChange() {
		this.changed.emit(this.value);
	}
}
