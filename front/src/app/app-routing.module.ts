import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: ``, loadChildren: () =>
      import('./pages/home-page/home-page.module').then(m => m.HomePageModule)},
  {path: `comics`, loadChildren: () =>
    import('./pages/comics-page/comics-page.module').then(m => m.ComicsPageModule)},
    {path: `comic`, loadChildren: () =>
    import('./pages/comics-page/comic/comic.module').then(m => m.ComicModule)},
    {path: `newComic`, loadChildren: () =>
      import('./pages/add-comic-page/add-comic-page.module').then(m => m.AddComicPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
