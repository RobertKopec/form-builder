import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button-component',
	templateUrl: 'app-button.component.html',
	styleUrls: ['app-button.component.scss']
})
export class AppButtonComponent {
	@Input() text: string;
	@Input() classes: string;
	@Output() clicked: EventEmitter<Event> = new EventEmitter<Event>();

	onClick(event: Event): void {
		this.clicked.emit(event);
	}
}
