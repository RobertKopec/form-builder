import {Component} from '@angular/core';
import {StorageService} from '../../../services/storage.service';

@Component({
  selector: 'app-app-export',
  templateUrl: './app-export.component.html',
  styleUrls: ['./app-export.component.scss']
})
export class AppExportComponent {
	constructor(private storageService: StorageService) {	}

	getJson() {
		return JSON.stringify(this.storageService.read(), null, 4);
	}
}
