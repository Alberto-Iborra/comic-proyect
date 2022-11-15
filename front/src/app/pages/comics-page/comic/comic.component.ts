import { ComictModel } from './../../../models/models';
import { Component, OnInit } from '@angular/core';
import { ComicsServiceService } from 'src/app/shared/comics.service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {
  comic:ComictModel={
    id: 1,
    title: 'string',
    author: 'string',
    cover: 'string',
    company: 'string',
  }

  id!: number;


  constructor(private comicsServiceService:ComicsServiceService, private activatedRoute: ActivatedRoute, private router:Router ) { }
  delete(id: number) {
    this.comicsServiceService.deleteProduct(id).subscribe((res: any) => {
    });
    this.router.navigate(['/characters']);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{this.id = Number(params.get('id'))}
    )
    this.comicsServiceService.getComicById(this.id).subscribe((res: any)=>{
      console.log(res);
      this.comic=res
      this.router.navigate(['/character/'+this.id])
    })
  }


}
