import { ComictModel } from './../models/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsServiceService {
  url:string ='http://localhost:3000/comics';
  comicList!: ComictModel[];
  comic: ComictModel={
    id: 1,
    title: 'string',
    author: 'string',
    cover: 'string',
    company: 'string',
  }
  // comic: ComictModel={
  //     id: 6,
  //     title: 'El Jabato. El poder del César',
  //     author: 'Víctor Alcázar',
  //     cover: 'https://4.bp.blogspot.com/-r7buwPP5fP0/XJVA4mjPyUI/AAAAAAAA0Ig/97MHvqtNFsUwqL4t0RaBkLtNVAVvnWyNgCLcBGAs/s1600/000%2B%25285%2529.jpg',
  //     company: 'EDITORIAL BRUGUERA',
  // }
  constructor(private http:HttpClient) {

  }
  getComics(){
    return this.http.get('http://localhost:3000/comics')
  }
  getComicById(id: number):Observable<ComictModel>{
    return this.http.get<ComictModel>('http://localhost:3000/comics/'+id)
  }
  post(comic: ComictModel){
    // comic.id= this.comicList.length > 0 ? this.comicList[this.comicList.length - 1].id+1 : 1;
    // this.comicList = [...this.comicList,comic];
    return this.http.post(this.url,comic);
  }
  deleteProduct(id: number){
    return this.http.delete(this.url + '/' + id);
  }
  put(comic: ComictModel):Observable<ComictModel>{
    return this.http.put<ComictModel>('http://localhost:3000/comics/'+comic.id, comic)}

}
