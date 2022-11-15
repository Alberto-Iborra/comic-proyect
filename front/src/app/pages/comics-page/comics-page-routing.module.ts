import { ComicsPageComponent } from './comics-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './comic/comic.component';

const routes: Routes = [
  { path: '', component: ComicsPageComponent },
  {
    path: ':id', component: ComicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsPageRoutingModule { }
