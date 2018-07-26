import {Injectable} from '@angular/core';
import {IStructureStore} from '../models/structure.model';

@Injectable()
export class StorageService {
	private localStorageKey = 'form-builder-sky';

	save(stringifiedStructure: string): void {
		localStorage.setItem(this.localStorageKey, stringifiedStructure);
	}

	read(): IStructureStore {
		return JSON.parse(localStorage.getItem(this.localStorageKey));
	}
}
