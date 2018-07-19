import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-input-component',
	templateUrl: 'app-input.component.html',
	styleUrls: ['app-input.component.scss']
})
export class AppInputComponent implements OnInit {
	@Input() value: string;
	@Input() type: string;
	@Output() update: EventEmitter<string> = new EventEmitter<string>();

	ngOnInit(): void {
		this.update.emit(this.value);
	}

	onChange() {
		this.update.emit(this.value);
	}
}
