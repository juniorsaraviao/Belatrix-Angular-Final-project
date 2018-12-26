import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [NgbProgressbarConfig]
})
export class ArticleComponent implements OnInit {
  
  articles:any;
  article_model:any;
  number:number;
  constructor(private _articleService:ArticleService, config: NgbProgressbarConfig) { 
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }
  
  ngOnInit() {
    this._articleService.getList().subscribe((result)=>{
      console.log(result);
      this.articles=result;
      this.articles.sort(function (a, b) {
        return b.votes - a.votes;
      });
      this.article_model = this.articles;
    })
    
  }

  aumentar(number){
    this.articles[number].votes+=1;
    this.articles.sort(function (a, b) {
      return b.votes - a.votes;
    });
  }

  disminuir(number){
    this.articles[number].votes=this.articles[number].votes-1;
    this.articles.sort(function (a, b) {
      return b.votes - a.votes;
    });
  }
  newitem:any = {
    id: '',
    title:'',
    votes:0,
    image:"/src/app/img/comun.png"
  }

  editarArticle:any={
    title:''
  }

  editarArticle2:any={
    title:'',
  }

  newitem2='';

  agregar(){
    var itemX = JSON.stringify(this.newitem);
    let aux = JSON.parse(itemX);
    aux.id = 1 + this.articles.length;
    
    this.articles.push(aux);
    this.newitem.title='';
  }

  modificar(){
    
    var itemX = JSON.stringify(this.newitem2);
    let aux = JSON.parse(itemX);
    this.editarArticle.title=aux;
    this.newitem2='';
  }

  eliminar(){
    
    for(let i=0;i<this.articles.length;i++){
      if(this.articles[i].id == this.editarArticle2.id){
        this.articles.splice(i,1);
        break;
      }
    }
  }

  buscarElemento='';
  element1='';
  result1='';
 
  buscar(){
    
    let searchString=this.buscarElemento.toLowerCase();
    
    var result1=this.articles.filter(function(element1){
      var itemX = JSON.stringify(element1.title);
      var itemXM=itemX.toLowerCase();
      
      if(itemXM.includes(searchString)){
        return element1;
      }  
    });
    this.article_model = '';
    if(!result1.length){
      this.article_model = this.articles;
    }else{
      this.article_model = result1;
    }
    console.log(this.article_model);
    this.buscarElemento='';
  }

}
