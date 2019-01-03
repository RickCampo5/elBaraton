import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: Http
  ) { }

  url = '../../assets/products.json'

  getProducts(){
    return this.http.get(this.url)
    .pipe(map((res:Response)=>res.json()))
  }

}
