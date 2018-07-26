import {Component, OnInit} from '@angular/core';
import {Structure} from '../../../models/structure.model';
import {StorageService} from '../../../services/storage.service';
import {StructureGroup} from '../../../models/structure-group.model';

@Component({
	selector: 'app-create-component',
	templateUrl: 'app-create.component.html',
	styleUrls: ['app-create.component.scss']
})
export class AppCreateComponent implements OnInit {
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
		return this.structure.branches;
	}

	addBranch(): void {
		this.structure.addBranch();
		this.storeStructure();
	}

	private storeStructure(): void {
		this.storageService.save(this.structure.returnAsStorable());
	}
}
