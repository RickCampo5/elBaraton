import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: Http
  ) { }

  url = '../../assets/categories.json'
  
  getCategories(){
    return this.http.get(this.url)
    .pipe(map((res:Response)=>res.json()));
  }

}
