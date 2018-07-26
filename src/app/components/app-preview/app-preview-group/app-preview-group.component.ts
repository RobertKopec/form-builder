import {Component, Input, OnInit} from '@angular/core';
import {StructureGroup} from '../../../../models/structure-group.model';

@Component({
	selector: 'app-preview-group',
	templateUrl: './app-preview-group.component.html',
	styleUrls: ['./app-preview-group.component.scss']
})
export class AppPreviewGroupComponent implements OnInit {
	@Input() selectionType: string;
	@Input() name: string;
	@Input() group: StructureGroup;
	value: any;
	generatedName: string;

	ngOnInit() {
		this.generatedName = this.generateRandomName();
	}

	updateCondition(value: any) {
		this.value = value;
	}

	generateRandomName(): string {
		const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let text = '';
		for (let i = 0; i < 10; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}

	checkCondition(conditionValue: string, conditionType: string): boolean {
		if (conditionType === 'less') {
			return this.value !== '' && this.value < Number(conditionValue);
		}
		if (conditionType === 'greater') {
			return this.value !== '' && this.value > Number(conditionValue);
		}
		if (conditionType === 'equals') {
			return this.value !== '' && this.value === conditionValue;
		}
	}
}
