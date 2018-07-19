import { Component, OnInit, OnChanges } from '@angular/core';
import { Structure } from '../../models/structure.model';
import { StorageService } from '../../services/storage.service';
import { StructureGroup } from '../../models/structure-group.model';

@Component({
	selector: 'app-builder-component',
	templateUrl: 'app-builder.component.html',
	styleUrls: ['app-builder.component.scss']
})
export class AppBuilderComponent implements OnInit {
	private structure: Structure;

	constructor(
		private storageService: StorageService
	) { }

	ngOnInit(): void {
		this.structure = new Structure(this.storageService.read());
	}

	onDeletion(index: number): void {
		this.structure.removeBranch(index);

		this.storeStructure();
	}

	onUpdate(): void {
		this.storeStructure();
	}

	getBranches(): StructureGroup[] {
		return this.structure.Branches;
	}

	addBranch(): void {
		this.structure.addBranch();

		this.storeStructure();
	}

	private storeStructure(): void {
		this.storageService.save(this.structure.returnAsStorable());
	}
}
