import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../../services/storage.service';
import {Structure} from '../../../models/structure.model';
import {StructureGroup} from '../../../models/structure-group.model';

@Component({
  selector: 'app-preview',
  templateUrl: './app-preview.component.html',
  styleUrls: ['./app-preview.component.scss']
})
export class AppPreviewComponent implements OnInit {
	private structure: Structure;

	constructor(
		private storageService: StorageService
	) { }

	ngOnInit(): void {
		this.structure = new Structure(this.storageService.read());
	}

	getBranches(): StructureGroup[] {
		return this.structure.branches;
	}
}
