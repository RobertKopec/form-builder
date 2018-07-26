import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StorageService } from '../services/storage.service';
import { AppCreateComponent } from './components/app-create/app-create.component';
import { AppGroupComponent } from './components/app-create/app-group/app-group.component';
import { AppButtonComponent } from './components/app-create/app-group/app-button/app-button.component';
import { AppInputComponent } from './components/app-create/app-group/app-input/app-input.component';
import { AppSelectComponent } from './components/app-create/app-group/app-select/app-select.component';
import {AppNavbarComponent} from './components/app-navbar/app-navbar.component';
import {AppRoutingModule} from './app-routing.module';
import { AppPreviewComponent } from './components/app-preview/app-preview.component';
import { AppExportComponent } from './components/app-export/app-export.component';
import { AppPreviewGroupComponent } from './components/app-preview/app-preview-group/app-preview-group.component';
import { AppPreviewInputComponent } from './components/app-preview/app-preview-group/app-preview-input/app-preview-input.component';

@NgModule({
	declarations: [
		AppComponent,
		AppCreateComponent,
		AppGroupComponent,
		AppButtonComponent,
		AppInputComponent,
		AppSelectComponent,
		AppNavbarComponent,
		AppPreviewComponent,
		AppExportComponent,
		AppPreviewGroupComponent,
		AppPreviewInputComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [
		StorageService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
