import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsPageRoutingModule } from './comics-page-routing.module';
import { ComicsPageComponent } from './comics-page.component';
import { GalleryComponent } from 'src/app/shared/components/gallery/gallery.component';


@NgModule({
  declarations: [
    ComicsPageComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    ComicsPageRoutingModule,


  ]
})
export class ComicsPageModule { }
