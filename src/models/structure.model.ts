import {StructureGroup} from './structure-group.model';

export interface IStructureStore {
	branches: StructureGroup[];
}

export class Structure {
	private internalStore: IStructureStore;

	constructor(store: IStructureStore) {
		this.internalStore = store || { branches: [] };
	}

	get branches(): StructureGroup[] {
		return this.internalStore.branches;
	}

	addBranch(): void {
		this.internalStore.branches = [].concat(this.internalStore.branches, new StructureGroup());
	}

	removeBranch(index: number): void {
		this.internalStore.branches.splice(index, 1);
	}

	returnAsStorable(): string {
		return JSON.stringify(this.internalStore);
	}
}
