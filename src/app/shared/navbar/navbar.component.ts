import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../service/categories.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menus: Category[];

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.categoriesService.getAll().subscribe(response => {
      this.menus = response;
    }, error => {
      console.log("Cannot get menus");
    });
  }
}
