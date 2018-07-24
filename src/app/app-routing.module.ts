import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { PostsDetailComponent } from './pages/posts-detail/posts-detail.component';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent
  },  
  {
      path: ':categoryName',
      component: CategoriesComponent,        
      runGuardsAndResolvers: 'paramsChange'  
  },
  {
      path: 'articles/:id',
      component: PostsDetailComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
