import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },

  { path: 'page-one', loadChildren: './page-one/page-one.module#PageOnePageModule' },
  { path: 'page-two', loadChildren: './page-two/page-two.module#PageTwoPageModule' },
  { path: 'page-three', loadChildren: './page-three/page-three.module#PageThreePageModule' },
  { path: 'toc', loadChildren: './toc/toc.module#TocPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
