import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-post-card-horizontal',
  templateUrl: './post-card-horizontal.component.html',
  styleUrls: ['./post-card-horizontal.component.css']
})
export class PostCardHorizontalComponent implements OnInit {

  @Input() model: Article;
  
  constructor() { }

  ngOnInit() {
  }

}
