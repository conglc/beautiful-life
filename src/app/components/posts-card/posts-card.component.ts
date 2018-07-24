import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.css']
})
export class PostsCardComponent implements OnInit {

  @Input() model: Article;

  constructor() { }

  ngOnInit() {
  }

}
