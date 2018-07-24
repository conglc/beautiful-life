import { Component, OnInit } from '@angular/core';
import { PostArchive } from '../../models/post-archive';

@Component({
  selector: 'app-post-archive',
  templateUrl: './post-archive.component.html',
  styleUrls: ['./post-archive.component.css']
})
export class PostArchiveComponent implements OnInit {

  postArchives: PostArchive[] = [
    {Name: 'Dec 17', Count:  10},
    {Name: 'Nov 17', Count:  9},
    {Name: 'Oct 17', Count:  7},
    {Name: 'Sep 17', Count:  5},
    {Name: 'Aug 17', Count:  4},
    {Name: 'Jul 17', Count:  2},
    {Name: 'Jun 17', Count:  0},
  ];

  constructor() { }

  ngOnInit() {
  }

}
