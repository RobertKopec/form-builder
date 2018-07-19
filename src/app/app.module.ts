import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StorageService } from '../services/storage.service';
import { AppBuilderComponent } from '../components/app-builder/app-builder.component';
import { AppGroupComponent } from '../components/app-group/app-group.component';
import { AppButtonComponent } from '../components/app-button/app-button.component';
import { AppInputComponent } from '../components/app-input/app-input.component';
import { AppSelectComponent } from '../components/app-select/app-select.component';

@NgModule({
	declarations: [
		AppComponent,
		AppBuilderComponent,
		AppGroupComponent,
		AppButtonComponent,
		AppInputComponent,
		AppSelectComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [
		StorageService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
