import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../../models/article';
import { ArticlesService } from '../../service/articles.service';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit {

  model = new Article();

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articlesService.getById(id).subscribe(response => {
      this.model = response;      
    }, error => {
      console.log("Error");
    });
  }

}
