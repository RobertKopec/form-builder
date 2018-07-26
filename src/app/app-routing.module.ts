import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppCreateComponent} from './components/app-create/app-create.component';
import {AppPreviewComponent} from './components/app-preview/app-preview.component';
import {AppExportComponent} from './components/app-export/app-export.component';

const appRoutes: Routes = [	{
		path: '',
		redirectTo: '/create',
		pathMatch: 'full'
}, {
	path: 'create',
	component: AppCreateComponent
}, {
	path: 'preview',
	component: AppPreviewComponent
}, {
	path: 'export',
		component: AppExportComponent
}];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule { }
