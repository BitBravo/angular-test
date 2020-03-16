import { RouterModule, Routes } from '@angular/router';

export const rootPath = '';

const appRoutes: Routes = [
	{
		path: rootPath,
		loadChildren: () =>
			import('@nx-monorepo-demo/home').then(m => m.HomeModule),
	},
];

export const appRouterModule = RouterModule.forRoot(appRoutes, {
	initialNavigation: 'enabled',
	useHash: true,
});
