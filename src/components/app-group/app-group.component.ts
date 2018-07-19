import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { StructureGroup } from '../../models/structure-group.model';

@Component({
	selector: 'app-group-component',
	templateUrl: 'app-group.component.html',
	styleUrls: ['app-group.component.scss']
})
export class AppGroupComponent {
	@Input() group: StructureGroup;
	@Input() index: number;
	@Input() showCondition: boolean;
	@Input() selectionType: string;
	@Output() deletion: EventEmitter<number> = new EventEmitter<number>();
	@Output() update: EventEmitter<any> = new EventEmitter<any>();

	onUpdate(): void {
		this.update.emit();
	}

	onDeletion(index: number): void {
		this.group.subInputs.splice(index, 1);
	}

	addSubInput(): void {
		this.group.subInputs = this.group.subInputs ?
			[new StructureGroup(), ...this.group.subInputs] :
			[new StructureGroup()];
	}

	updateValue(value: any, property: string) {
		this.group[property] = value;

		this.onUpdate();
	}

	updateCondition(value: any, property: string) {
		if (!this.group.condition) {
			this.group.condition = { type: '', value: '' };
		}

		this.group.condition[property] = value;

		this.onUpdate();
	}

	delete(): void {
		this.deletion.emit(this.index);
	}

	getFirstSelectOptions(): any[] {
		switch (this.selectionType) {
			case 'string':
				return [{text: 'Equals', value: 'equals'}];
			case 'boolean':
				return [{text: 'Equals', value: 'equals'}];
			default:
				return [
					{text: 'Equals', value: 'equals'},
					{text: 'Greater than', value: 'greater'},
					{text: 'Less than', value: 'less'}
				];
		}
	}
}
