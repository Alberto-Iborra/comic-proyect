import { ComictModel } from './../../models/models';
import { ComicsServiceService } from 'src/app/shared/comics.service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comic-page',
  templateUrl: './add-comic-page.component.html',
  styleUrls: ['./add-comic-page.component.scss']
})
export class AddComicPageComponent implements OnInit {
  newComicForm!: FormGroup;
  submitted: boolean = false;
  comic!: ComictModel;
  id: string = '';
  constructor(private form:FormBuilder, private comicsServiceService: ComicsServiceService, private router:Router) { }

  ngOnInit(): void {
    this.newComicForm = this.form.group({
      title: [this.comicsServiceService.comic.title, [Validators.required, Validators.minLength(3)]],
      cover: [this.comicsServiceService.comic.cover, [Validators.required, Validators.minLength(3)]],
      author: [this.comicsServiceService.comic.author, [Validators.required, Validators.minLength(3)]],
      company: [this.comicsServiceService.comic.company, [Validators.required, Validators.minLength(3)]]
    });
  }
  onSubmit(){
    this.submitted = true;
    if(this.newComicForm.valid){

      const newComic: ComictModel = {
        id: 0,
        title: this.newComicForm.get('title')?.value,
        cover: this.newComicForm.get('cover')?.value,
        author: this.newComicForm.get('author')?.value,
        company: this.newComicForm.get('company')?.value
      }
      this.comicsServiceService.post(newComic).subscribe();

    }
      this.newComicForm.reset();
      this.submitted = false
      this.router.navigate(['/comics']);
    }
    onEdit(){
      this.submitted = true;
      if(this.newComicForm.valid){

        const newComic: ComictModel = {
          id: 0,
          title: this.newComicForm.get('title')?.value,
          cover: this.newComicForm.get('cover')?.value,
          author: this.newComicForm.get('author')?.value,
          company: this.newComicForm.get('company')?.value
        }
        this.comicsServiceService.put(newComic).subscribe();

      }
        this.newComicForm.reset();
        this.submitted = false
        this.router.navigate(['/comics']);
      }

}
