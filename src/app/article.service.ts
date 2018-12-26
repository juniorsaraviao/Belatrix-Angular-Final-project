import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from  './model/article.model';
import { Observable } from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  apiUrl='http://localhost:3000/articles';

  items: Observable<Article[]>;
  
  constructor(private _http:HttpClient) { }
  getList():Observable<Article[]>{
    return this._http.get<Article[]>(this.apiUrl).pipe();
  }

  
}
