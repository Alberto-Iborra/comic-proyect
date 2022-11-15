import { ComictModel } from './../../models/models';
import { ComicsServiceService } from './../../shared/comics.service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics-page',
  templateUrl: './comics-page.component.html',
  styleUrls: ['./comics-page.component.scss']
})
export class ComicsPageComponent implements OnInit {
  comics: any[]=[];
  comic:ComictModel={
    id: 1,
    title: 'string',
    author: 'string',
    cover: 'string',
    company: 'string',
  }

  id!: number;
  constructor(private comicsServiceService:ComicsServiceService){ }




  ngOnInit(): void {
    this.comicsServiceService.getComics().subscribe((res: any)=>{
      console.log(res);
      this.comics=res
    })
  }

}
