import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-posts-card-recent',
  templateUrl: './posts-card-recent.component.html',
  styleUrls: ['./posts-card-recent.component.css']
})
export class PostsCardRecentComponent implements OnInit {

  @Input() model: Article;

  constructor() { }

  ngOnInit() {
  }

}
