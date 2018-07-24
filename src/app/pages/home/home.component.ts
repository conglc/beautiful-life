import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from '../../service/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  limit: number = 6;
  offset: number = 0;
  isExist: boolean = true;

  hotLimit: number = 4;
  hotOffset: number = 0;
  isExistHotArticle: boolean = true;

  newArticles: Article[] = [];
  hotArticles: Article[] = [];  

  constructor(
    private articleService: ArticlesService
  ) { }

  ngOnInit() {
    this.getNewest();
    this.getHotest();
  }

  getNewest() {
    this.articleService.getNewest(this.limit, this.offset).subscribe(response => {
      response.forEach(x => {
        this.newArticles.push(x);
      })      
      if (response.length < this.limit) {
        this.isExist = false;
      }
      this.offset++;
    }, error => {
      console.log(error);
    });
  }

  getHotest() {
    this.articleService.getHotest(this.hotLimit, this.hotOffset).subscribe(response => {
      response.forEach(x => {
        this.hotArticles.push(x);
      })      
      if (response.length < this.hotLimit) {
        this.isExistHotArticle = false;
      }
      this.hotOffset++;
    }, error => {
      console.log(error);
    });
  }
}
