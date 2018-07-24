import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { Article } from 'src/app/models/article';
import { ArticlesService } from '../../service/articles.service';
import { Category } from '../../models/category';
import { CategoriesService } from '../../service/categories.service';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  
  limit: number;
  offset: number;
  isExist: boolean;

  category = new Category();
  articles: Article[] = [];

  navigationSubscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    private articlesService: ArticlesService
  ) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {    
    this.limit = 2;
    this.offset = 0;
    this.isExist = false;

    this.category = new Category();
    this.articles = [];
    this.getCategories();
  }

  ngOnInit() {}

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we  
    // don't then we will continue to run our initialiseInvites()   
    // method on every navigationEnd event.
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();       
    }
  }

  getCategories() {
    const name = this.route.snapshot.paramMap.get('categoryName');
    this.categoriesService.getByName(name).subscribe(response => {
      this.category = response;
      this.getArticles();      
    }, error => {
      console.log("Cannot get categories");
    });
  }

  getArticles() {
    this.articlesService.getByCategory(this.category.id, this.limit, this.offset).subscribe(response => {      
      response.forEach(x => this.articles.push(x));
      if (response.length >= this.limit) {
        this.isExist = true;
        this.offset++;
      } else {
        this.isExist = false;
      }      
    }, error => {
      console.log("Cannot get articles");
    });
  }

}
