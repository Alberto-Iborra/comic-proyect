import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComictModel } from 'src/app/models/models';
import { ComicsServiceService } from '../../comics.service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() globalComics: any[] =[];
  // comic: ComictModel={
  //   id: 6,
  //   title: 'El Jabato. El poder del César',
  //   author: 'Víctor Alcázar',
  //   cover: 'https://4.bp.blogspot.com/-r7buwPP5fP0/XJVA4mjPyUI/AAAAAAAA0Ig/97MHvqtNFsUwqL4t0RaBkLtNVAVvnWyNgCLcBGAs/s1600/000%2B%25285%2529.jpg',
  //   company: 'EDITORIAL BRUGUERA',
// }
  // @Output() comicIdEmitter = new EventEmitter
  constructor(private comicsServiceService:ComicsServiceService) { }


  ngOnInit(): void {
  }
  // sendComicId(){
  //   this.comicIdEmitter.emit(this.comic.id)
  // }

}
