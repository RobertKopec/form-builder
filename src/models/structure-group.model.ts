export interface IConditionObject {
	type: string;
	value: string;
}

export class StructureGroup {
	question: string;
	condition: IConditionObject;
	selection: string;
	subInputs: StructureGroup[];

	constructor() {
		this.question = null;
		this.condition = { type: '', value: '' };
		this.subInputs = null;
		this.selection = null;
	}
}
