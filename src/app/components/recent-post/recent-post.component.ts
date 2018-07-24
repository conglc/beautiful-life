import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.css']
})
export class RecentPostComponent implements OnInit {

  articles: Article[] = [    
    { id: 1, title: 'Addiction When Gambling Becomes A Problem', image: '../assets/img/asset/slider.jpg', description: 'inappropriate behavior Lorem ipsum dolor sit amet, consecteturinapprop riate behavior Lorem ipsum dolor sit amet, consectetur', content: '', createdAt: new Date()},
    { id: 2, title: 'Addiction When Gambling Becomes A Problem', image: '../assets/img/asset/slider.jpg', description: 'inappropriate behavior Lorem ipsum dolor sit amet, consecteturinapprop riate behavior Lorem ipsum dolor sit amet, consectetur', content: '', createdAt: new Date()},
    { id: 3, title: 'Addiction When Gambling Becomes A Problem', image: '../assets/img/asset/slider.jpg', description: 'inappropriate behavior Lorem ipsum dolor sit amet, consecteturinapprop riate behavior Lorem ipsum dolor sit amet, consectetur', content: '', createdAt: new Date()}
  ];

  constructor() { }

  ngOnInit() {
  }

}
